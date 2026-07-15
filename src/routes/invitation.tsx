import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

const SUPABASE_URL = "https://uszmpknbnpsenoahivkf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzem1wa25ibnBzZW5vYWhpdmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1Njg1NzIsImV4cCI6MjA5OTE0NDU3Mn0.FNd98h-yZ-ftSeUqOvlqOJfQIcagthOUHXDgF3vKt6Q";

const ROLE_LABELS: Record<string, string> = {
  school_admin: "Administrateur d'école",
  teacher: "Enseignant",
  parent: "Parent",
};

type InviteInfo = {
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  schoolName: string | null;
};

export const Route = createFileRoute("/invitation")({
  component: InvitationPage,
  head: () => ({
    meta: [
      { title: "Créer mon compte — EduFaso" },
      {
        name: "description",
        content: "Acceptez votre invitation EduFaso et choisissez votre mot de passe.",
      },
    ],
  }),
});

function InvitationPage() {
  const token = useMemo(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("token") ?? "";
  }, []);

  const [info, setInfo] = useState<InviteInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Lien d'invitation invalide (token manquant).");
      setLoading(false);
      return;
    }

    void (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/get-invitation?token=${encodeURIComponent(token)}`,
          {
            headers: {
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              apikey: SUPABASE_ANON_KEY,
            },
          },
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Invitation introuvable");
        setInfo({
          email: data.email,
          role: data.role,
          firstName: data.firstName,
          lastName: data.lastName,
          schoolName: data.schoolName,
        });
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erreur de chargement");
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/accepter-invitation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec");
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Impossible de créer le compte");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-8 w-8 rounded-md bg-primary" />
          <h1 className="font-display text-2xl font-bold text-foreground">EduFaso</h1>
          <p className="mt-1 text-sm text-muted-foreground">Créer mon compte</p>
        </div>

        {loading ? (
          <p className="text-center text-sm text-muted-foreground">Chargement…</p>
        ) : done ? (
          <div className="space-y-4 text-center">
            <p className="text-foreground font-medium">Compte créé avec succès.</p>
            <p className="text-sm text-muted-foreground">
              Ouvrez l'application EduFaso sur votre ordinateur et connectez-vous avec{" "}
              <strong>{info?.email}</strong>.
            </p>
            <a
              href="/#telecharger"
              className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Télécharger EduFaso
            </a>
          </div>
        ) : error && !info ? (
          <div className="space-y-4 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <a href="/" className="text-sm text-primary hover:underline">
              Retour au site
            </a>
          </div>
        ) : (
          <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
            <div className="rounded-xl bg-secondary/60 p-4 text-sm">
              <p>
                <span className="text-muted-foreground">Bonjour </span>
                <strong>
                  {info?.firstName} {info?.lastName}
                </strong>
              </p>
              <p className="mt-1">
                <span className="text-muted-foreground">E-mail : </span>
                {info?.email}
              </p>
              <p className="mt-1">
                <span className="text-muted-foreground">Rôle : </span>
                {ROLE_LABELS[info?.role ?? ""] ?? info?.role}
              </p>
              {info?.schoolName ? (
                <p className="mt-1">
                  <span className="text-muted-foreground">École : </span>
                  {info.schoolName}
                </p>
              ) : null}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Mot de passe</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Confirmer</label>
              <input
                type="password"
                required
                minLength={6}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {submitting ? "Création…" : "Créer mon compte"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
