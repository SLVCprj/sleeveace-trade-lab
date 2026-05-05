import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Headphones, Gift, TrendingUp, LineChart, Send, ExternalLink, Lock } from "lucide-react";
import tradingChart from "@/assets/trading-chart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SleeveAce Trading Lab — Analisi Forex & Oro Istituzionali" },
      { name: "description", content: "Analisi quotidiane gratuite su EUR/USD, GBP/USD e Oro. Entra nel canale Telegram di SleeveAce Trading Lab." },
      { property: "og:title", content: "SleeveAce Trading Lab" },
      { property: "og:description", content: "Domina i mercati con analisi istituzionali. Forex e Oro, ogni giorno." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <LineChart className="h-4 w-4" />
            </span>
            <span>SleeveAce<span className="text-primary"> Lab</span></span>
          </a>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-muted-foreground cursor-not-allowed opacity-60"
          >
            <Lock className="h-4 w-4" /> Telegram
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              100% Free · Live Market Analysis
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Domina i Mercati con <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Analisi Istituzionali</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Analisi quotidiane <span className="text-primary font-semibold">completamente gratuite</span> su Forex e Oro. Setup verificati, livelli chiave e bias di mercato direttamente sul tuo Telegram. Nessun abbonamento, nessun costo nascosto.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Coming soon"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-7 py-4 text-base font-bold text-muted-foreground cursor-not-allowed opacity-60"
              >
                <Lock className="h-5 w-5" /> Entra nel Canale Telegram
              </button>
              <a href="#perche" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-base font-medium hover:bg-card transition">
                Scopri di più
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="text-foreground font-bold text-xl">85%</span><br />Setup vincenti</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="text-foreground font-bold text-xl">24/7</span><br />Supporto</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur p-3 shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 text-xs text-muted-foreground border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-destructive" />
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="font-mono">XAU/USD · H4</span>
                <span className="font-mono text-primary">+1.84%</span>
              </div>
              <img
                src={tradingChart}
                alt="Grafico di trading stilizzato XAU/USD"
                width={1280}
                height={896}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-mono uppercase tracking-widest">// Chi siamo</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Un team di analisti indipendenti.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            SleeveAce Trading Lab è un collettivo di analisti focalizzati esclusivamente sulle <span className="text-foreground font-semibold">Major</span> — EUR/USD, GBP/USD — e sull'<span className="text-foreground font-semibold">Oro (XAU/USD)</span>. Niente segnali a raffica: solo analisi tecniche e fondamentali di qualità istituzionale, condivise gratuitamente con la community.
          </p>
        </div>
      </section>

      {/* Perché sceglierci */}
      <section id="perche" className="border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-mono uppercase tracking-widest">// Perché sceglierci</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trasparenza, qualità, accesso.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Analisi Verificate", desc: "Ogni setup è documentato, tracciato e verificabile. Niente fumo, solo dati." },
              { icon: Headphones, title: "Supporto 24/7", desc: "Il nostro team risponde alle tue domande in qualsiasi sessione di mercato." },
              { icon: Gift, title: "Accesso Gratuito", desc: "Il canale Telegram è e resterà gratuito. La community è il nostro asset." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broker Partner */}
      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary p-8 md:p-14">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center blur-md select-none pointer-events-none" aria-hidden="true">
            <div>
              <p className="text-accent text-sm font-mono uppercase tracking-widest">// Broker Partner</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Tradi con <span className="text-primary">Axi</span>.</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Abbiamo scelto Axi come broker partner ufficiale: spread istituzionali, esecuzione veloce e regolamentazione di primo livello. Apri un conto VIP e accedi a condizioni dedicate.
              </p>
              <span
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-muted px-7 py-4 text-base font-bold text-muted-foreground opacity-60"
              >
                Apri un conto VIP <ExternalLink className="h-4 w-4" />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl border border-border bg-background/50 backdrop-blur px-10 py-8 text-center">
                <div className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AXI
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Official Partner</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> Coming Soon
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Broker Partner</h2>
            <p className="text-muted-foreground max-w-md">In arrivo a breve. Stiamo finalizzando la partnership ufficiale.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-5 pb-20 text-center">
        <TrendingUp className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">Pronto a tradare con noi?</h2>
        <p className="mt-4 text-muted-foreground text-lg">Unisciti gratis al canale Telegram e ricevi la prossima analisi.</p>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Coming soon"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-muted px-8 py-4 text-base font-bold text-muted-foreground cursor-not-allowed opacity-60"
        >
          <Lock className="h-5 w-5" /> Entra nel Canale Telegram
        </button>
        <p className="mt-3 text-xs text-muted-foreground">Coming soon</p>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="border-t border-border bg-card/40">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 font-bold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <LineChart className="h-4 w-4" />
              </span>
              SleeveAce Trading Lab
            </div>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SleeveAce Trading Lab. Tutti i diritti riservati.</p>
          </div>
          <div className="rounded-xl border border-border bg-background/50 p-5">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground uppercase">Disclaimer di Rischio:</span> Il trading sul mercato Forex, sull'Oro e sui CFD comporta un elevato livello di rischio e potrebbe non essere adatto a tutti gli investitori. L'effetto leva può lavorare a tuo favore così come a tuo sfavore. Prima di decidere di operare sul Forex dovresti considerare attentamente i tuoi obiettivi di investimento, il livello della tua esperienza e la propensione al rischio. Esiste la possibilità di subire una perdita pari o superiore al tuo investimento iniziale, pertanto non dovresti investire denaro che non puoi permetterti di perdere. Tutte le analisi, i contenuti e le informazioni pubblicate da SleeveAce Trading Lab hanno esclusivamente scopo <span className="font-semibold text-foreground">educativo e informativo</span> e non costituiscono in alcun modo consulenza finanziaria, raccomandazione o sollecitazione all'investimento. Sei l'unico responsabile delle tue decisioni di trading.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
