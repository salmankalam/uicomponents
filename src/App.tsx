import { useState } from "react";
import { Cpu } from "lucide-react";
import {
  AnimatedTextCycle,
  AuroraBackground,
  ClientFeedback,
  ContactForm,
  DiaText,
  DropdownNavigation,
  Footer4Col,
  GradientButton,
  HoverFooter,
  InteractiveSelector,
  LiquidButton,
  MetalButton,
  OriginButton,
  PortfolioPage,
  StaggerTestimonials,
  TextGlitchCSS,
  TextReveal,
  TiltCard,
  TypewriterEffectSmooth,
  VerticalTabs,
} from "./components/ui";

type Category = "featured" | "text-animations" | "buttons" | "forms" | "interactive" | "landing" | "footer";

const categories: { id: Category; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "text-animations", label: "Text Animations" },
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Inputs & Forms" },
  { id: "interactive", label: "Interactive" },
  { id: "landing", label: "Landing Page" },
  { id: "footer", label: "Footer" },
];

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("featured");

  const show = (cat: Category | Category[]) => {
    if (activeCategory === "featured") return true;
    const cats = Array.isArray(cat) ? cat : [cat];
    return cats.includes(activeCategory);
  };

  return (
    <div className="min-h-dvh bg-white dark:bg-[#111] text-[#111] dark:text-[#f6f3ec] transition-colors">
      {/* ─── Hero Section (Aurora Background) ─── */}
      <div className="relative h-dvh overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 flex h-dvh flex-col items-center justify-center overflow-hidden px-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
            Personal UI Styles Showcase
          </p>

          <h1 className="max-w-4xl text-center text-4xl font-light tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Make your websites feel{" "}
            <DiaText
              repeat
              repeatDelay={1.5}
              text={["smooth.", "focused.", "refined.", "alive."]}
              className="inline"
            />
          </h1>

          <p className="mt-6 max-w-md text-center text-[#646b75] dark:text-[#9a958a]">
            Scroll down to see Dia Text and Typewriter Effect used across different
            UI patterns.
          </p>

          <div className="mt-12 animate-bounce rounded-full border border-[#e3e7ec] dark:border-[#2b2a25] p-3">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* ─── Category Nav Bar ─── */}
      <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] bg-[#fafafa] dark:bg-[#1a1a18]">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#111] text-white dark:bg-[#f6f3ec] dark:text-[#111]"
                  : " text-[#646b75] hover:text-[#111] dark:text-[#9a958a] dark:hover:text-[#f6f3ec]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Feature Cards ─── */}
      {show("featured") && (
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Feature Highlights
            </h2>
          </div>
          <p className="mb-16 text-center text-3xl font-light tracking-tight sm:text-4xl">
            <DiaText text={["Animations that captivate."]} once={false} />
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((card) => (
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
      )}

      {/* ─── Dia Text Showcase ─── */}
      {show("text-animations") && (
        <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
                Dia Text — Variants
              </h2>
            </div>

            <div className="mt-16 grid gap-20">
              <div className="text-center">
                <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
                  Single word · Custom sunset palette
                </p>
                <p className="text-3xl font-light tracking-tight sm:text-4xl">
                  <DiaText
                    text={["Beautiful"]}
                    colors={["#f97316", "#e11d48", "#a21caf"]}
                    duration={2}
                    once={false}
                  />
                </p>
              </div>

              <div className="text-center">
                <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
                  Multi-word cycling · Ocean palette
                </p>
                <p className="text-3xl font-light tracking-tight sm:text-4xl">
                  <DiaText
                    repeat
                    repeatDelay={1.2}
                    text={["Explore.", "Create.", "Innovate.", "Inspire."]}
                    colors={["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"]}
                    duration={1.8}
                  />
                </p>
              </div>

              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
                  Inline within a sentence
                </p>
                <p className="text-xl leading-relaxed sm:text-2xl">
                  We build products that are{" "}
                  <DiaText
                    repeat
                    repeatDelay={1.5}
                    text={["fast.", "secure.", "scalable.", "elegant."]}
                    colors={["#22c55e", "#10b981", "#14b8a6", "#06b6d4"]}
                    className="inline"
                    fixedWidth
                  />{" "}
                  From idea to launch.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Typewriter Showcase ─── */}
      {show("text-animations") && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
                Typewriter Effect — Variants
              </h2>
            </div>

            <div className="mt-16 grid gap-20">
              <div className="flex flex-col items-center">
                <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
                  Smooth variant · Reveals on scroll
                </p>
                <TypewriterEffectSmooth
                  words={[
                    { text: "Ideas" },
                    { text: "become" },
                    { text: "reality" },
                    { text: "with", className: "text-[#646b75] dark:text-[#9a958a]" },
                    { text: "21st.dev.", className: "text-blue-500" },
                  ]}
                />
              </div>

              <div className="rounded-2xl bg-[#f5f7fa] dark:bg-[#171716] py-16 text-center">
                <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
                  Used in a CTA section
                </p>
                <p className="mb-6 text-2xl font-light tracking-tight sm:text-3xl">
                  <DiaText
                    text={["Ready to build something great?"]}
                    colors={["#8b5cf6", "#3b82f6", "#06b6d4"]}
                    duration={2}
                    once={false}
                  />
                </p>
                <TypewriterEffectSmooth
                  words={[
                    { text: "Start" },
                    { text: "your" },
                    { text: "free trial", className: "text-violet-500" },
                    { text: "today." },
                  ]}
                  className="justify-center"
                />
                <div className="mt-8 flex justify-center gap-4">
                  <button className="rounded-xl bg-[#111] dark:bg-white px-8 py-3 text-sm font-medium text-white dark:text-[#111] transition-opacity hover:opacity-90">
                    Get Started
                  </button>
                  <button className="rounded-xl border border-[#e3e7ec] dark:border-[#2b2a25] px-8 py-3 text-sm font-medium transition-colors hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a18]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Gradient Button Showcase ─── */}
      {show("buttons") && (
        <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Gradient Button — Variants
            </h2>
            <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
              CSS-only gradient animations · Hover for glow effect
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <GradientButton>Get Started</GradientButton>
              <GradientButton variant="variant">Get Started</GradientButton>
            </div>
          </div>
        </section>
      )}

      {/* ─── Liquid Glass Button Showcase ─── */}
      {show("buttons") && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Liquid Glass Button
            </h2>
            <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
              Frosted glass with liquid fill · Hover to see the effect
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <LiquidButton>Liquid Glass</LiquidButton>
            </div>
          </div>
        </section>
      )}

      {/* ─── Metal Button Showcase ─── */}
      {show("buttons") && (
        <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Metal Button
            </h2>
            <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
              Brushed metal finish with sheen · Hover for reflection
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <MetalButton>Metal</MetalButton>
            </div>
          </div>
        </section>
      )}

      {/* ─── Origin Button Showcase ─── */}
      {show("buttons") && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Origin Button — Fill on Hover
            </h2>
            <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
              Ink-fill expands from the cursor position · Touch and keyboard friendly
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <OriginButton>Get Started</OriginButton>
            </div>
          </div>
        </section>
      )}

      {/* ─── Text Reveal Showcase ─── */}
      {show("text-animations") && (
        <section className="relative py-24">
          <div className="text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Text Reveal — Scroll to Reveal
            </h2>
          </div>
          <p className="mb-8 text-center text-xs text-[#646b75] dark:text-[#9a958a]">
            Words fade in progressively as you scroll down
          </p>
          <TextReveal>Magic UI will change the way you design.</TextReveal>
        </section>
      )}

      {/* ─── Text Glitch CSS Showcase ─── */}
      {show("text-animations") && (
        <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Text Glitch — CSS Edition
            </h2>
            <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
              GSAP-free version using CSS keyframes · Hover to scramble
            </p>
            <TextGlitchCSS text="GLITCH" hoverText="CSS RULES" />
          </div>
        </section>
      )}

      {/* ─── Animated Text Cycle Showcase ─── */}
      {show("text-animations") && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Animated Text Cycle
            </h2>
            <p className="mb-3 text-xs text-[#646b75] dark:text-[#9a958a]">
              Framer Motion word cycler · Auto-rotates every 2s
            </p>
            <p className="text-4xl font-light tracking-tight">
              We build{" "}
              <AnimatedTextCycle
                words={["fast.", "beautiful.", "responsive.", "modern."]}
                className="text-blue-500"
              />
            </p>
          </div>
        </section>
      )}

      {/* ─── Combined Demo ─── */}
      {show("text-animations") && (
        <section className="border-y border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Together in a Hero
            </h2>
            <div className="mt-8">
              <p className="text-2xl font-light tracking-tight sm:text-3xl md:text-4xl">
                <DiaText
                  repeat
                  repeatDelay={2}
                  text={["Design.", "Develop.", "Deliver."]}
                  colors={["#a855f7", "#ec4899", "#f97316"]}
                  duration={2}
                />
              </p>
              <TypewriterEffectSmooth
                words={[
                  { text: "The" },
                  { text: "fastest" },
                  { text: "way" },
                  { text: "to" },
                  { text: "ship", className: "text-purple-500" },
                  { text: "UI." },
                ]}
                className="justify-center mt-4"
              />
            </div>
          </div>
        </section>
      )}

      {/* ─── Code Export Section ─── */}
      {show("featured") && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Ready to use in any project
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-[#646b75] dark:text-[#9a958a]">
              Import these components from <code className="rounded bg-[#f5f7fa] dark:bg-[#171716] px-2 py-0.5 text-sm">src/components/ui/</code> and use them anywhere.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#e3e7ec] dark:border-[#2b2a25] bg-[#f5f7fa] dark:bg-[#171716] text-left">
              <div className="border-b border-[#e3e7ec] dark:border-[#2b2a25] px-4 py-2 text-xs text-[#646b75] dark:text-[#9a958a]">
                Example usage
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code>{`import { DiaText, TypewriterEffectSmooth } from "@/components/ui";

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
}`}</code>
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
      )}

      {/* ─── Landing Page Showcase ─── */}
      {show("landing") && (
        <section>
          <PortfolioPage />
        </section>
      )}

      {/* ─── Vertical Tabs Showcase ─── */}
      {show("interactive") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25]">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 mt-24 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Vertical Tabs — Animated Service Showcase
            </h2>
            <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
              Tab navigation with smooth animated transitions and auto-play
            </p>
          </div>
          <VerticalTabs />
        </section>
      )}

      {/* ─── Interactive Selector Showcase ─── */}
      {show("interactive") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25]">
          <div className="mx-auto max-w-6xl px-4 pt-24 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Interactive Selector — Expandable Options
            </h2>
            <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
              Click to expand each option with smooth animated transitions
            </p>
          </div>
          <InteractiveSelector />
        </section>
      )}

      {/* ─── Tilt Card Showcase ─── */}
      {show("interactive") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Tilt Card — 3D Mouse Tracking
            </h2>
            <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
              Card tilts toward the cursor with a soft glare highlight
            </p>
            <div className="flex justify-center">
              <TiltCard max={15} className="w-full max-w-md">
                <div className="rounded-2xl border border-[#e3e7ec] dark:border-[#2b2a25] bg-white dark:bg-[#111] p-10 text-left shadow-lg">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-violet-500">
                    21st.dev
                  </p>
                  <p className="text-xl font-light leading-relaxed text-[#646b75] dark:text-[#9a958a]">
                    Interactive UI components that make your product feel alive.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>
      )}

      {/* ─── Dropdown Navigation Showcase ─── */}
      {show("interactive") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
                Dropdown Navigation — Hover Menus
              </h2>
              <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
                Animated mega-menu dropdowns with shared-layout transitions
              </p>
            </div>
            <DropdownNavigation
              navItems={[
                {
                  id: 1,
                  label: "Products",
                  subMenus: [
                    {
                      title: "Platform",
                      items: [
                        {
                          label: "Previews",
                          description: "Ship faster with live previews",
                          icon: Cpu,
                        },
                      ],
                    },
                  ],
                },
                { id: 2, label: "Docs", link: "#" },
                { id: 3, label: "Pricing", link: "#" },
              ]}
            />
          </div>
        </section>
      )}

      {/* ─── Staggered Testimonials Showcase ─── */}
      {show("interactive") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
                Staggered Testimonials — Carousel
              </h2>
              <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
                Stacked testimonial cards that rotate on demand
              </p>
            </div>
            <StaggerTestimonials />
          </div>
        </section>
      )}

      {/* ─── Client Feedback Showcase ─── */}
      {show("interactive") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Testimonial — Client Feedback
            </h2>
            <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
              Polished testimonial card with avatar and quote
            </p>
            <ClientFeedback />
          </div>
        </section>
      )}

      {/* ─── Contact Form Showcase ─── */}
      {show("forms") && (
        <section className="border-t border-[#e3e7ec] dark:border-[#2b2a25] py-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-600/10 to-blue-600/10 dark:from-violet-400/20 dark:to-blue-400/20 text-violet-700 dark:text-violet-300 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800 inline-block">
              Contact Form — Smooth Caret Input
            </h2>
            <p className="mb-8 text-xs text-[#646b75] dark:text-[#9a958a]">
              Custom animated caret that springs to each cursor position
            </p>
            <ContactForm />
          </div>
        </section>
      )}

      {/* ─── Footer Showcase ─── */}
      {show("footer") && (
        <section>
          <Footer4Col />
        </section>
      )}

      {/* ─── Real Footer (always visible) ─── */}
      <footer className="bg-[#111] dark:bg-black">
        <HoverFooter />
      </footer>
    </div>
  );
}

export default App;
