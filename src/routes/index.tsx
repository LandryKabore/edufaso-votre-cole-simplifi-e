import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-school.jpg";

// Application EduFaso (repo educationconnect → GitHub Pages)
const APP_URL = "https://landrykabore.github.io/educationconnect/connexion";
// APK Android : laisser vide = "Bientôt disponible" jusqu'à hébergement du fichier
const APK_URL = "";

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
          href={APP_URL}
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 h-9 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Ouvrir l'app
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
              Présences, notes, bulletins et communication école–famille — dans une seule
              application, accessible depuis n'importe quel téléphone.
            </p>
            <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                className="group inline-flex items-center gap-2 rounded-full bg-cream text-slate-ink px-7 h-13 py-4 text-base font-semibold hover:bg-cream/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-ink/20"
              >
                Ouvrir l'application
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#installer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/50 text-cream px-7 py-4 text-base font-medium hover:bg-cream/10 transition-colors"
              >
                Comment installer
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
    <section id="installer" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-16">
          <p className="text-terracotta text-sm font-semibold tracking-widest uppercase mb-4">
            Installer l'app
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Deux façons d'installer EduFaso.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* PWA */}
          <div className="rounded-2xl bg-secondary/60 p-8 sm:p-10">
            <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Option 1 · Application web
            </div>
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Ajouter à l'écran d'accueil
            </h3>

            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Sur Android (Chrome)</div>
                <ol className="text-muted-foreground space-y-1 text-sm list-decimal list-inside">
                  <li>Ouvrez l'application dans Chrome</li>
                  <li>Appuyez sur le menu ⋮ en haut à droite</li>
                  <li>Choisissez « Ajouter à l'écran d'accueil »</li>
                </ol>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Sur iPhone (Safari)</div>
                <ol className="text-muted-foreground space-y-1 text-sm list-decimal list-inside">
                  <li>Ouvrez l'application dans Safari</li>
                  <li>Appuyez sur l'icône Partager <span aria-hidden>⤴</span></li>
                  <li>Choisissez « Sur l'écran d'accueil »</li>
                </ol>
              </div>
            </div>

            <a
              href={APP_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Ouvrir l'application <span aria-hidden>→</span>
            </a>
          </div>

          {/* APK */}
          <div className="rounded-2xl bg-slate-ink text-cream p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-terracotta/30 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="text-xs font-semibold tracking-widest uppercase text-cream/70 mb-3">
                Option 2 · Android APK
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Télécharger l'APK</h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-8">
                Installez EduFaso directement sur un téléphone Android, sans passer par le Play Store.
                Autorisez l'installation depuis des sources inconnues si demandé.
              </p>
              {APK_URL ? (
                <a
                  href={APK_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-slate-ink px-6 py-3 text-sm font-semibold hover:bg-cream/90 transition-colors"
                >
                  Télécharger l'APK <span aria-hidden>↓</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream/80 px-6 py-3 text-sm font-medium">
                  Bientôt disponible
                </span>
              )}
            </div>
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
