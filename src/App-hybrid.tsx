import {
  AnimatedTextCycle,
  ContactForm,
  DiaText,
  GradientButton,
  TextGlitchCSS,
  TextReveal,
  TypewriterEffectSmooth,
} from "./components/ui";

declare global {
  interface Window {
    WP_CONTENT?: {
      hero?: {
        badge?: string;
        headingPrefix?: string;
        diaWords?: string[];
        description?: string;
      };
      features?: {
        heading?: string;
        subtitleDiaWords?: string[];
        cards?: { title: string; desc: string }[];
      };
      diaText?: {
        heading?: string;
        variants?: {
          label: string;
          words: string[];
          colors: string[];
          duration?: number;
          once?: boolean;
          repeat?: boolean;
          repeatDelay?: number;
          inlinePrefix?: string;
          inlineSuffix?: string;
          fixedWidth?: boolean;
        }[];
      };
      typewriter?: {
        heading?: string;
        variants?: {
          label: string;
          words: { text: string; className?: string }[];
          ctaHeading?: string;
          ctaColors?: string[];
          buttons?: { text: string }[];
        }[];
      };
      gradientButton?: {
        heading?: string;
        label?: string;
        variantLabel?: string;
      };
      textReveal?: {
        heading?: string;
        label?: string;
        text?: string;
      };
      textGlitch?: {
        heading?: string;
        label?: string;
        text?: string;
        hoverText?: string;
      };
      textCycle?: {
        heading?: string;
        label?: string;
        prefix?: string;
        words?: string[];
      };
      combinedDemo?: {
        heading?: string;
        diaWords?: string[];
        diaColors?: string[];
        typewriterWords?: { text: string; className?: string }[];
      };
      codeExport?: {
        heading?: string;
        description?: string;
        code?: string;
      };
      contact?: {
        heading?: string;
        label?: string;
      };
      footer?: {
        text?: string;
      };
    };
  }
}

const wp = window.WP_CONTENT;

const C = {
  hero: {
    badge: wp?.hero?.badge ?? "21st.dev Showcase",
    headingPrefix: wp?.hero?.headingPrefix ?? "Make your text feel ",
    diaWords: wp?.hero?.diaWords ?? ["smooth.", "focused.", "refined.", "alive."],
    description: wp?.hero?.description ?? "Scroll down to see Dia Text and Typewriter Effect used across different UI patterns.",
  },
  features: {
    heading: wp?.features?.heading ?? "Feature Highlights",
    subtitleDiaWords: wp?.features?.subtitleDiaWords ?? ["Animations that captivate."],
    cards: wp?.features?.cards ?? [
      {
        title: "Color Sweep Reveal",
        desc: "Text animates with a vibrant gradient band that sweeps across, revealing each letter with a colorful trail.",
      },
      {
        title: "Multi-Word Cycling",
        desc: "Automatically cycles through an array of words with smooth blur and translate transitions between each swap.",
      },
      {
        title: "Scroll-Activated Triggers",
        desc: "Both components support scroll-triggered animations — text comes to life exactly when it enters the viewport.",
      },
    ],
  },
  diaText: {
    heading: wp?.diaText?.heading ?? "Dia Text — Variants",
    variants: wp?.diaText?.variants ?? [
      {
        label: "Single word · Custom sunset palette",
        words: ["Beautiful"],
        colors: ["#f97316", "#e11d48", "#a21caf"],
        duration: 2,
        once: false,
      },
      {
        label: "Multi-word cycling · Ocean palette",
        words: ["Explore.", "Create.", "Innovate.", "Inspire."],
        colors: ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"],
        duration: 1.8,
        repeat: true,
        repeatDelay: 1.2,
      },
      {
        label: "Inline within a sentence",
        words: ["fast.", "secure.", "scalable.", "elegant."],
        colors: ["#22c55e", "#10b981", "#14b8a6", "#06b6d4"],
        duration: 2,
        repeat: true,
        repeatDelay: 1.5,
        inlinePrefix: "We build products that are ",
        inlineSuffix: " From idea to launch.",
        fixedWidth: true,
      },
    ],
  },
  typewriter: {
    heading: wp?.typewriter?.heading ?? "Typewriter Effect — Variants",
    variants: wp?.typewriter?.variants ?? [
      {
        label: "Smooth variant · Reveals on scroll",
        words: [
          { text: "Ideas" },
          { text: "become" },
          { text: "reality" },
          { text: "with", className: "text-[#646b75] dark:text-[#9a958a]" },
          { text: "21st.dev.", className: "text-blue-500" },
        ],
      },
      {
        label: "Used in a CTA section",
        ctaHeading: "Ready to build something great?",
        ctaColors: ["#8b5cf6", "#3b82f6", "#06b6d4"],
        words: [
          { text: "Start" },
          { text: "your" },
          { text: "free trial", className: "text-violet-500" },
          { text: "today." },
        ],
        buttons: [
          { text: "Get Started" },
          { text: "Learn More" },
        ],
      },
    ],
  },
  gradientButton: {
    heading: wp?.gradientButton?.heading ?? "Gradient Button — Variants",
    label: wp?.gradientButton?.label ?? "CSS-only gradient animations · Hover for glow effect",
    variantLabel: wp?.gradientButton?.variantLabel ?? "Get Started",
  },
  textReveal: {
    heading: wp?.textReveal?.heading ?? "Text Reveal — Scroll to Reveal",
    label: wp?.textReveal?.label ?? "Words fade in progressively as you scroll down",
    text: wp?.textReveal?.text ?? "Magic UI will change the way you design.",
  },
  textGlitch: {
    heading: wp?.textGlitch?.heading ?? "Text Glitch — CSS Edition",
    label: wp?.textGlitch?.label ?? "GSAP-free version using CSS keyframes · Hover to scramble",
    text: wp?.textGlitch?.text ?? "GLITCH",
    hoverText: wp?.textGlitch?.hoverText ?? "CSS RULES",
  },
  textCycle: {
    heading: wp?.textCycle?.heading ?? "Animated Text Cycle",
    label: wp?.textCycle?.label ?? "Framer Motion word cycler · Auto-rotates every 2s",
    prefix: wp?.textCycle?.prefix ?? "We build ",
    words: wp?.textCycle?.words ?? ["fast.", "beautiful.", "responsive.", "modern."],
  },
  combinedDemo: {
    heading: wp?.combinedDemo?.heading ?? "Together in a Hero",
    diaWords: wp?.combinedDemo?.diaWords ?? ["Design.", "Develop.", "Deliver."],
    diaColors: wp?.combinedDemo?.diaColors ?? ["#a855f7", "#ec4899", "#f97316"],
    typewriterWords: wp?.combinedDemo?.typewriterWords ?? [
      { text: "The" },
      { text: "fastest" },
      { text: "way" },
      { text: "to" },
      { text: "ship", className: "text-purple-500" },
      { text: "UI." },
    ],
  },
  codeExport: {
    heading: wp?.codeExport?.heading ?? "Ready to use in any project",
    description: wp?.codeExport?.description ?? "Import these components from src/components/ui/ and use them anywhere.",
    code: wp?.codeExport?.code ?? `import { DiaText, TypewriterEffectSmooth } from "@/components/ui";

export function Hero() {
  return (
    <h1>
      Make interfaces feel{" "}
      <DiaText repeat text={["smooth.", "fast.", "alive."]} />
      <TypewriterEffectSmooth
        words={[
          { text: "Built" },
          { text: "with" },
          { text: "21st.dev", className: "text-blue-500" },
        ]}
      />
    </h1>
  );
}`,
  },
  contact: {
    heading: wp?.contact?.heading ?? "Contact Form — Smooth Caret Input",
    label: wp?.contact?.label ?? "Custom animated caret that springs to each cursor position",
  },
  footer: {
    text: wp?.footer?.text ?? "Powered by 21st.dev \u00b7 Components from the 21st MCP Marketplace",
  },
};

function AppHybrid() {
  return (
    <div className="min-h-dvh bg-white dark:bg-[#111] text-[#111] dark:text-[#f6f3ec] transition-colors">
      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,132,252,0.08),transparent_60%)]" />

        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
          {C.hero.badge}
        </p>

        <h1 className="max-w-4xl text-center text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {C.hero.headingPrefix}
          <DiaText
            repeat
            repeatDelay={1.5}
            text={C.hero.diaWords}
            className="inline"
          />
        </h1>

        <p className="mt-6 max-w-md text-center text-[#646b75] dark:text-[#9a958a]">
          {C.hero.description}
        </p>

        <div className="mt-12 animate-bounce rounded-full border border-[#e3e7ec] dark:border-[#2b2a25] p-3">
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── Feature Cards ─── */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
          {C.features.heading}
        </h2>
        <p className="mb-16 text-center text-3xl font-light tracking-tight sm:text-4xl">
          <DiaText text={C.features.subtitleDiaWords} once={false} />
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {C.features.cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-[#e3e7ec] dark:border-[#2b2a25] bg-white dark:bg-[#111] p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-medium">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[#646b75] dark:text-[#9a958a]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Dia Text Showcase ─── */}
      <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.diaText.heading}
          </h2>

          <div className="mt-16 grid gap-20">
            {C.diaText.variants.map((v, i) => {
              const isInline = !!v.inlinePrefix;
              return (
                <div key={i} className={isInline ? "mx-auto max-w-2xl text-center" : "text-center"}>
                  <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">{v.label}</p>
                  <p className={isInline ? "text-xl leading-relaxed sm:text-2xl" : "text-3xl font-light tracking-tight sm:text-4xl"}>
                    {v.inlinePrefix && <>{v.inlinePrefix} </>}
                    <DiaText
                      repeat={v.repeat}
                      repeatDelay={v.repeatDelay}
                      text={v.words}
                      colors={v.colors}
                      duration={v.duration}
                      className={isInline ? "inline" : undefined}
                      fixedWidth={v.fixedWidth}
                      once={v.once}
                    />
                    {v.inlineSuffix && <> {v.inlineSuffix}</>}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Typewriter Showcase ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.typewriter.heading}
          </h2>

          <div className="mt-16 grid gap-20">
            {C.typewriter.variants.map((v, i) => {
              const isCta = !!v.ctaHeading;
              return (
                <div key={i} className={isCta ? "rounded-2xl bg-[#f5f7fa] dark:bg-[#171716] py-16 text-center" : "flex flex-col items-center"}>
                  <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">{v.label}</p>
                  {isCta ? (
                    <>
                      <p className="mb-6 text-2xl font-light tracking-tight sm:text-3xl">
                        <DiaText
                          text={[v.ctaHeading!]}
                          colors={v.ctaColors}
                          duration={2}
                          once={false}
                        />
                      </p>
                      <TypewriterEffectSmooth
                        words={v.words}
                        className="justify-center"
                      />
                      <div className="mt-8 flex justify-center gap-4">
                        {v.buttons?.map((btn, j) => (
                          <button
                            key={j}
                            className={
                              j === 0
                                ? "rounded-xl bg-[#111] dark:bg-white px-8 py-3 text-sm font-medium text-white dark:text-[#111] transition-opacity hover:opacity-90"
                                : "rounded-xl border border-[#e3e7ec] dark:border-[#2b2a25] px-8 py-3 text-sm font-medium transition-colors hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a18]"
                            }
                          >
                            {btn.text}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <TypewriterEffectSmooth words={v.words} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Gradient Button Showcase ─── */}
      <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.gradientButton.heading}
          </h2>
          <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
            {C.gradientButton.label}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <GradientButton>{C.gradientButton.variantLabel}</GradientButton>
            <GradientButton variant="variant">{C.gradientButton.variantLabel}</GradientButton>
          </div>
        </div>
      </section>

      {/* ─── Text Reveal Showcase ─── */}
      <section className="relative py-24">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
          {C.textReveal.heading}
        </h2>
        <p className="mb-8 text-center text-xs text-[#646b75] dark:text-[#9a958a]">
          {C.textReveal.label}
        </p>
        <TextReveal>{C.textReveal.text}</TextReveal>
      </section>

      {/* ─── Text Glitch CSS Showcase ─── */}
      <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.textGlitch.heading}
          </h2>
          <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
            {C.textGlitch.label}
          </p>
          <TextGlitchCSS text={C.textGlitch.text} hoverText={C.textGlitch.hoverText} />
        </div>
      </section>

      {/* ─── Animated Text Cycle Showcase ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.textCycle.heading}
          </h2>
          <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
            {C.textCycle.label}
          </p>
          <p className="text-4xl font-light tracking-tight">
            {C.textCycle.prefix}
            <AnimatedTextCycle
              words={C.textCycle.words}
              className="text-blue-500"
            />
          </p>
        </div>
      </section>

      {/* ─── Combined Demo ─── */}
      <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.combinedDemo.heading}
          </h2>
          <div className="mt-8">
            <p className="text-2xl font-light tracking-tight sm:text-3xl md:text-4xl">
              <DiaText
                repeat
                repeatDelay={2}
                text={C.combinedDemo.diaWords}
                colors={C.combinedDemo.diaColors}
                duration={2}
              />
            </p>
            <TypewriterEffectSmooth
              words={C.combinedDemo.typewriterWords}
              className="justify-center mt-4"
            />
          </div>
        </div>
      </section>

      {/* ─── Code Export Section ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.codeExport.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[#646b75] dark:text-[#9a958a]">
            {C.codeExport.description}
          </p>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#e3e7ec] dark:border-[#2b2a25] bg-[#f5f7fa] dark:bg-[#171716] text-left">
            <div className="border-b border-[#e3e7ec] dark:border-[#2b2a25] px-4 py-2 text-xs text-[#646b75] dark:text-[#9a958a]">
              Example usage
            </div>
            <pre className="overflow-x-auto p-4 text-sm">
              <code>{C.codeExport.code}</code>
            </pre>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm font-medium">Reusable exports</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["DiaText", "DiaTextReveal", "TypewriterEffect", "TypewriterEffectSmooth"].map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-[#e3e7ec] dark:border-[#2b2a25] px-4 py-2 text-xs font-mono"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact Form Showcase ─── */}
      <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#646b75] dark:text-[#9a958a]">
            {C.contact.heading}
          </h2>
          <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
            {C.contact.label}
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-8 text-center text-xs text-[#646b75] dark:text-[#9a958a]">
        {C.footer.text}
      </footer>
    </div>
  );
}

export default AppHybrid;
