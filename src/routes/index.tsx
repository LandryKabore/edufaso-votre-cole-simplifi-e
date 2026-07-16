import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-school.jpg";

/** Installateurs ordinateur — Windows prêt ; Mac bientôt (build sur Mac). */
const WIN_DOWNLOAD_URL =
  "https://github.com/LandryKabore/educationconnect/raw/main/downloads/EduFaso-Setup-1.0.1.exe";
const MAC_DOWNLOAD_URL = ""; // .dmg bientôt

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-md bg-primary" aria-hidden />
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            EduFaso
          </span>
        </a>
        <a
          href="#telecharger"
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 h-9 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Télécharger
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Cour d'école au Burkina Faso"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-ink/70 via-slate-ink/40 to-slate-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-terracotta/20 mix-blend-multiply" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16">
            <p className="animate-fade-in text-cream/80 text-sm tracking-[0.25em] uppercase mb-6">
              Burkina Faso
            </p>
            <h1 className="animate-fade-up font-display font-extrabold text-cream leading-[0.9] text-[clamp(3.5rem,12vw,10rem)]">
              EduFaso
            </h1>
            <p className="animate-fade-up delay-150 mt-6 max-w-2xl text-cream text-xl sm:text-2xl font-display font-normal">
              Système de gestion scolaire pour le Burkina Faso.
            </p>
            <p className="animate-fade-up delay-300 mt-4 max-w-xl text-cream/80 text-base sm:text-lg">
              Présences, notes, bulletins et communication école–famille — sur ordinateur
              (Windows et Mac). Applications mobiles plus tard (App Store / Google Play).
            </p>
            <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#telecharger"
                className="group inline-flex items-center gap-2 rounded-full bg-cream text-slate-ink px-7 h-13 py-4 text-base font-semibold hover:bg-cream/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-ink/20"
              >
                Télécharger pour ordinateur
                <span aria-hidden className="transition-transform group-hover:translate-x-1">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const roles = [
  { name: "Administrateur", desc: "Gérer les classes, enseignants et élèves de votre établissement." },
  { name: "Enseignant", desc: "Saisir les présences et les notes, éditer les bulletins." },
  { name: "Parent", desc: "Suivre la scolarité de votre enfant et échanger avec l'école." },
  { name: "Élève", desc: "Consulter votre emploi du temps, vos notes et vos bulletins." },
];

function PourQui() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">Pour qui ?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Une seule application, quatre profils.
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {roles.map((r, i) => (
            <div key={r.name} className="grid grid-cols-12 gap-4 py-8 items-baseline">
              <div className="col-span-12 sm:col-span-1 text-muted-foreground font-mono text-sm">
                0{i + 1}
              </div>
              <h3 className="col-span-12 sm:col-span-4 font-display text-2xl font-semibold text-foreground">
                {r.name}
              </h3>
              <p className="col-span-12 sm:col-span-7 text-muted-foreground text-lg">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Présences",
    desc: "Appel rapide en classe, absences et retards centralisés, alertes automatiques aux parents.",
    icon: "◐",
  },
  {
    title: "Notes et bulletins",
    desc: "Saisie des notes par matière, calcul automatique des moyennes, bulletins prêts à imprimer.",
    icon: "✳",
  },
  {
    title: "Communication",
    desc: "Un canal direct entre parents et enseignants : messages, annonces et informations de l'école.",
    icon: "◇",
  },
  {
    title: "Multi-écoles",
    desc: "Un même compte pour plusieurs établissements, léger et rapide même en connexion mobile.",
    icon: "❖",
  },
];

function Features() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">
            Ce que fait EduFaso
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            L'essentiel de la vie scolaire, réuni.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {features.map((f) => (
            <div key={f.title} className="flex gap-5">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-primary/10 text-primary text-2xl flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Installer() {
  return (
    <section id="telecharger" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-widest uppercase text-primary mb-5">
            Version 1.0.1
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Télécharger EduFaso
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Installez sur l'ordinateur de l'école. Windows disponible maintenant — Mac bientôt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Mac */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="text-3xl mb-4" aria-hidden>
              
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Mac — application bureau
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-8">
              <li>macOS 12 ou plus</li>
              <li>Apple Silicon et Intel</li>
            </ul>
            {MAC_DOWNLOAD_URL ? (
              <a
                href={MAC_DOWNLOAD_URL}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Télécharger pour Mac (.dmg)
              </a>
            ) : (
              <span className="inline-flex w-full items-center justify-center rounded-xl border border-dashed border-border px-5 py-3.5 text-sm font-medium text-muted-foreground">
                Bientôt disponible (.dmg)
              </span>
            )}
          </div>

          {/* Windows */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="text-3xl mb-4" aria-hidden>
              ⊞
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Windows — application bureau
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 mb-8">
              <li>Windows 10 ou plus</li>
              <li>64 bits</li>
            </ul>
            <a
              href={WIN_DOWNLOAD_URL}
              download="EduFaso-Setup-1.0.1.exe"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Télécharger pour Windows (.exe)
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-3 py-1">Dernière version : 1.0.1</span>
          <span className="rounded-full bg-secondary px-3 py-1">Ordinateur seulement</span>
          <span className="rounded-full bg-secondary px-3 py-1">Mobile plus tard</span>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Installer sur Windows</h4>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Cliquez sur « Télécharger pour Windows »</li>
              <li>Ouvrez le fichier <code className="text-foreground">EduFaso-Setup.exe</code></li>
              <li>Suivez l'assistant d'installation</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Installer sur Mac</h4>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Le fichier .dmg sera bientôt disponible</li>
              <li>Ensuite : ouvrir le .dmg et glisser EduFaso dans Applications</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Securite() {
  return (
    <section className="py-24 sm:py-28 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">
          Sécurité & confiance
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Les comptes sont créés par l'école.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          EduFaso ne propose pas d'inscription publique pour les élèves. Chaque compte est créé et
          contrôlé par l'établissement, pour protéger les données des enfants et garantir que seules
          les personnes autorisées accèdent aux informations scolaires.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-ink text-cream/80 py-14">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row gap-8 sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block h-6 w-6 rounded-md bg-primary" aria-hidden />
            <span className="font-display font-bold text-xl text-cream">EduFaso</span>
          </div>
          <p className="text-sm text-cream/60 max-w-sm">
            Système de gestion scolaire conçu au Burkina Faso, pour les écoles du Burkina Faso.
          </p>
        </div>
        <div className="text-sm text-cream/60 space-y-1 sm:text-right">
          <div>Burkina Faso</div>
          <div>
            Contact :{" "}
            <a className="text-cream hover:text-terracotta transition-colors" href="mailto:contact@edufaso.bf">
              contact@edufaso.bf
            </a>
          </div>
          <div className="pt-2 text-xs text-cream/40">
            © {new Date().getFullYear()} EduFaso
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PourQui />
        <Features />
        <Installer />
        <Securite />
      </main>
      <Footer />
    </div>
  );
}
