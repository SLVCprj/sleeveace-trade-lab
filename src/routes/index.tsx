import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Headphones, Gift, TrendingUp, LineChart, ExternalLink, Lock } from "lucide-react";
import { useState } from "react";
import tradingChart from "@/assets/trading-chart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SleeveAce Trading Lab — Institutional Forex & Gold Analysis" },
      { name: "description", content: "Free daily analysis on EUR/USD, GBP/USD and Gold. Join the SleeveAce Trading Lab Telegram channel." },
      { property: "og:title", content: "SleeveAce Trading Lab" },
      { property: "og:description", content: "Master the markets with institutional analysis. Forex and Gold, every day." },
    ],
  }),
  component: Index,
});

type Lang = "en" | "it";

const T = {
  en: {
    navTelegram: "Telegram",
    badge: "100% Free · Live Market Analysis",
    heroTitlePre: "Master the Markets with ",
    heroTitleHl: "Institutional Analysis",
    heroSub1: "Daily ",
    heroSubHl: "completely free",
    heroSub2: " analysis on Forex and Gold. Verified setups, key levels and market bias delivered straight to your Telegram. No subscription, no hidden costs.",
    ctaJoin: "Join the Telegram Channel",
    ctaLearn: "Learn more",
    statSetups: "Winning setups",
    statSupport: "Support",
    statFree: "Free",
    aboutTag: "// About us",
    aboutTitle: "An independent team of analysts.",
    aboutText1: "SleeveAce Trading Lab is a collective of analysts focused exclusively on the ",
    aboutMajors: "Majors",
    aboutText2: " — EUR/USD, GBP/USD — and ",
    aboutGold: "Gold (XAU/USD)",
    aboutText3: ". No signal spam: only institutional-grade technical and fundamental analysis, shared free with the community.",
    whyTag: "// Why choose us",
    whyTitle: "Transparency, quality, access.",
    feat1Title: "Verified Analysis",
    feat1Desc: "Every setup is documented, tracked and verifiable. No smoke, just data.",
    feat2Title: "24/7 Support",
    feat2Desc: "Our team answers your questions in any market session.",
    feat3Title: "Free Access",
    feat3Desc: "The Telegram channel is and will remain free. The community is our asset.",
    brokerTag: "// Broker Partner",
    brokerTitlePre: "Trade with ",
    brokerText: "We chose Axi as our official broker partner: institutional spreads, fast execution and top-tier regulation. Open a VIP account and access dedicated conditions.",
    brokerCta: "Open a VIP account",
    comingSoon: "Coming Soon",
    brokerComing: "Broker Partner",
    brokerComingSub: "Coming soon. We're finalizing the official partnership.",
    finalTitle: "Ready to trade with us?",
    finalSub: "Join the Telegram channel for free and receive the next analysis.",
    finalNote: "Coming soon",
    disclaimerTitle: "Risk Disclaimer:",
    disclaimerText: "Trading on the Forex market, Gold and CFDs carries a high level of risk and may not be suitable for all investors. Leverage can work in your favor as well as against you. Before deciding to trade Forex you should carefully consider your investment objectives, level of experience and risk appetite. There is the possibility of suffering a loss equal to or greater than your initial investment, therefore you should not invest money you cannot afford to lose. All analyses, content and information published by SleeveAce Trading Lab are for ",
    disclaimerHl: "educational and informational purposes only",
    disclaimerText2: " and do not constitute in any way financial advice, recommendation or solicitation to invest. You are solely responsible for your trading decisions.",
    rights: "All rights reserved.",
  },
  it: {
    navTelegram: "Telegram",
    badge: "100% Free · Analisi di Mercato Live",
    heroTitlePre: "Domina i Mercati con ",
    heroTitleHl: "Analisi Istituzionali",
    heroSub1: "Analisi quotidiane ",
    heroSubHl: "completamente gratuite",
    heroSub2: " su Forex e Oro. Setup verificati, livelli chiave e bias di mercato direttamente sul tuo Telegram. Nessun abbonamento, nessun costo nascosto.",
    ctaJoin: "Entra nel Canale Telegram",
    ctaLearn: "Scopri di più",
    statSetups: "Setup vincenti",
    statSupport: "Supporto",
    statFree: "Free",
    aboutTag: "// Chi siamo",
    aboutTitle: "Un team di analisti indipendenti.",
    aboutText1: "SleeveAce Trading Lab è un collettivo di analisti focalizzati esclusivamente sulle ",
    aboutMajors: "Major",
    aboutText2: " — EUR/USD, GBP/USD — e sull'",
    aboutGold: "Oro (XAU/USD)",
    aboutText3: ". Niente segnali a raffica: solo analisi tecniche e fondamentali di qualità istituzionale, condivise gratuitamente con la community.",
    whyTag: "// Perché sceglierci",
    whyTitle: "Trasparenza, qualità, accesso.",
    feat1Title: "Analisi Verificate",
    feat1Desc: "Ogni setup è documentato, tracciato e verificabile. Niente fumo, solo dati.",
    feat2Title: "Supporto 24/7",
    feat2Desc: "Il nostro team risponde alle tue domande in qualsiasi sessione di mercato.",
    feat3Title: "Accesso Gratuito",
    feat3Desc: "Il canale Telegram è e resterà gratuito. La community è il nostro asset.",
    brokerTag: "// Broker Partner",
    brokerTitlePre: "Tradi con ",
    brokerText: "Abbiamo scelto Axi come broker partner ufficiale: spread istituzionali, esecuzione veloce e regolamentazione di primo livello. Apri un conto VIP e accedi a condizioni dedicate.",
    brokerCta: "Apri un conto VIP",
    comingSoon: "Coming Soon",
    brokerComing: "Broker Partner",
    brokerComingSub: "In arrivo a breve. Stiamo finalizzando la partnership ufficiale.",
    finalTitle: "Pronto a tradare con noi?",
    finalSub: "Unisciti gratis al canale Telegram e ricevi la prossima analisi.",
    finalNote: "Coming soon",
    disclaimerTitle: "Disclaimer di Rischio:",
    disclaimerText: "Il trading sul mercato Forex, sull'Oro e sui CFD comporta un elevato livello di rischio e potrebbe non essere adatto a tutti gli investitori. L'effetto leva può lavorare a tuo favore così come a tuo sfavore. Prima di decidere di operare sul Forex dovresti considerare attentamente i tuoi obiettivi di investimento, il livello della tua esperienza e la propensione al rischio. Esiste la possibilità di subire una perdita pari o superiore al tuo investimento iniziale, pertanto non dovresti investire denaro che non puoi permetterti di perdere. Tutte le analisi, i contenuti e le informazioni pubblicate da SleeveAce Trading Lab hanno esclusivamente scopo ",
    disclaimerHl: "educativo e informativo",
    disclaimerText2: " e non costituiscono in alcun modo consulenza finanziaria, raccomandazione o sollecitazione all'investimento. Sei l'unico responsabile delle tue decisioni di trading.",
    rights: "Tutti i diritti riservati.",
  },
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <LineChart className="h-4 w-4" />
            </span>
            <span>SleeveAce<span className="text-primary"> Lab</span></span>
          </a>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-border bg-card/50 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-pressed={lang === "en"}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLang("it")}
                className={`px-3 py-1 rounded-full transition ${lang === "it" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-pressed={lang === "it"}
              >
                IT
              </button>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold text-muted-foreground cursor-not-allowed opacity-60"
            >
              <Lock className="h-4 w-4" /> {t.navTelegram}
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {t.badge}
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {t.heroTitlePre}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t.heroTitleHl}</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              {t.heroSub1}<span className="text-primary font-semibold">{t.heroSubHl}</span>{t.heroSub2}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Coming soon"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-7 py-4 text-base font-bold text-muted-foreground cursor-not-allowed opacity-60"
              >
                <Lock className="h-5 w-5" /> {t.ctaJoin}
              </button>
              <a href="#perche" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-base font-medium hover:bg-card transition">
                {t.ctaLearn}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="text-foreground font-bold text-xl">85%</span><br />{t.statSetups}</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="text-foreground font-bold text-xl">24/7</span><br />{t.statSupport}</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="text-foreground font-bold text-xl">100%</span><br />{t.statFree}</div>
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
              <img src={tradingChart} alt="XAU/USD trading chart" width={1280} height={896} className="rounded-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-mono uppercase tracking-widest">{t.aboutTag}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t.aboutTitle}</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            {t.aboutText1}<span className="text-foreground font-semibold">{t.aboutMajors}</span>{t.aboutText2}<span className="text-foreground font-semibold">{t.aboutGold}</span>{t.aboutText3}
          </p>
        </div>
      </section>

      <section id="perche" className="border-y border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-mono uppercase tracking-widest">{t.whyTag}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t.whyTitle}</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: t.feat1Title, desc: t.feat1Desc },
              { icon: Headphones, title: t.feat2Title, desc: t.feat2Desc },
              { icon: Gift, title: t.feat3Title, desc: t.feat3Desc },
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

      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary p-8 md:p-14">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center blur-md select-none pointer-events-none" aria-hidden="true">
            <div>
              <p className="text-accent text-sm font-mono uppercase tracking-widest">{t.brokerTag}</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t.brokerTitlePre}<span className="text-primary">Axi</span>.</h2>
              <p className="mt-4 text-muted-foreground text-lg">{t.brokerText}</p>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-muted px-7 py-4 text-base font-bold text-muted-foreground opacity-60">
                {t.brokerCta} <ExternalLink className="h-4 w-4" />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-2xl border border-border bg-background/50 backdrop-blur px-10 py-8 text-center">
                <div className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AXI</div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Official Partner</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> {t.comingSoon}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">{t.brokerComing}</h2>
            <p className="text-muted-foreground max-w-md">{t.brokerComingSub}</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 pb-20 text-center">
        <TrendingUp className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">{t.finalTitle}</h2>
        <p className="mt-4 text-muted-foreground text-lg">{t.finalSub}</p>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Coming soon"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-muted px-8 py-4 text-base font-bold text-muted-foreground cursor-not-allowed opacity-60"
        >
          <Lock className="h-5 w-5" /> {t.ctaJoin}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">{t.finalNote}</p>
      </section>

      <footer className="border-t border-border bg-card/40">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 font-bold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <LineChart className="h-4 w-4" />
              </span>
              SleeveAce Trading Lab
            </div>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SleeveAce Trading Lab. {t.rights}</p>
          </div>
          <div className="rounded-xl border border-border bg-background/50 p-5">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground uppercase">{t.disclaimerTitle}</span> {t.disclaimerText}<span className="font-semibold text-foreground">{t.disclaimerHl}</span>{t.disclaimerText2}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
