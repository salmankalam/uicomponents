import { useEffect, useRef, useState, type ReactNode } from "react";

const IMAGES = {
  guillermo:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop",
  rika: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop",
  reacher:
    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop",
  john: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop",
  steven:
    "https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop",
  guillermoBlue:
    "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop",
  paul: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop",
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        filter: visible ? "blur(0px)" : "blur(10px)",
        transition:
          "opacity 600ms ease-out, transform 600ms cubic-bezier(0.22,1,0.36,1), filter 600ms ease-out",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function ClientFeedback() {
  return (
    <main className="relative w-full overflow-hidden bg-surface text-surface-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <section className="container-x relative py-20 md:py-28">
        <article className="mx-auto max-w-screen-md space-y-2 text-center">
          <Reveal delay={0} className="space-y-2">
            <h1 className="font-display text-3xl font-medium xl:text-4xl">What our guests say</h1>
            <p className="mx-auto text-surface-foreground/70">
              Real words from recent charters at the Dubai Marina.
            </p>
          </Reveal>
        </article>

        <div className="flex w-full flex-col gap-2 px-4 pb-4 pt-10 lg:grid lg:grid-cols-3 lg:gap-2 lg:px-10 lg:py-10">
          <div className="md:flex h-full gap-2 lg:flex-col lg:gap-2">
            <Reveal
              delay={0}
              className="relative flex flex-[6] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#111111] p-5 text-white lg:flex-[7]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff26_1px,transparent_1px),linear-gradient(to_bottom,#ffffff26_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="mt-auto">
                <p>
                  “The most seamless charter we have booked in Dubai. We planned everything over
                  WhatsApp and were on deck within the hour.”
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className="text-sm font-semibold lg:text-xl">Sofia M.</h2>
                    <p className="text-white/70">Anniversary charter · Marina</p>
                  </div>
                  <img
                    src={IMAGES.guillermo}
                    alt="Sofia M."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </Reveal>
            <Reveal
              delay={400}
              className="relative flex flex-[4] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-blue-600 p-5 text-white lg:h-fit lg:shrink-0 lg:flex-[3]"
            >
              <article className="mt-auto">
                <p>
                  “Immaculate deck, chilled drinks waiting, and a crew that anticipated everything
                  before we asked.”
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className="text-xl font-semibold">Rika S.</h2>
                    <p className="text-white/70">Family day charter</p>
                  </div>
                  <img
                    src={IMAGES.rika}
                    alt="Rika S."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </Reveal>
          </div>

          <div className="md:flex h-fit flex-col gap-2 lg:h-full lg:gap-2">
            <Reveal
              delay={800}
              className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#111111] p-5 text-white"
            >
              <article className="mt-auto">
                <p className="text-sm 2xl:text-base">
                  “Hosted a client dinner for twelve aboard the Sovereign 102. Flawless from
                  boarding to docking.”
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h2 className="text-lg font-semibold lg:text-xl">Priya V.</h2>
                    <p className="text-sm text-white/70 lg:text-base">Corporate host · DIFC</p>
                  </div>
                  <img
                    src={IMAGES.reacher}
                    alt="Priya V."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-12 w-12 rounded-xl object-cover lg:h-16 lg:w-16"
                  />
                </div>
              </article>
            </Reveal>
            <Reveal
              delay={1200}
              className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#111111] p-5 text-white"
            >
              <article className="mt-auto">
                <p className="text-sm 2xl:text-base">
                  “Booked, boarded, off — no broker chain, no surprises. This is how a charter
                  should work.”
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h2 className="text-lg font-semibold lg:text-xl">Lena K.</h2>
                    <p className="text-sm text-white/70 lg:text-base">Private client · Zurich</p>
                  </div>
                  <img
                    src={IMAGES.john}
                    alt="Lena K."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-12 w-12 rounded-xl object-cover lg:h-16 lg:w-16"
                  />
                </div>
              </article>
            </Reveal>
            <Reveal
              delay={1600}
              className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#111111] p-5 text-white"
            >
              <article className="mt-auto">
                <p className="text-sm 2xl:text-base">
                  “The sunset itinerary was cinema — immaculate teak and a crew that felt permanent,
                  not hired.”
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h2 className="text-lg font-semibold lg:text-xl">Marcus T.</h2>
                    <p className="text-sm text-white/70 lg:text-base">Returning guest</p>
                  </div>
                  <img
                    src={IMAGES.steven}
                    alt="Marcus T."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-12 w-12 rounded-xl object-cover lg:h-16 lg:w-16"
                  />
                </div>
              </article>
            </Reveal>
          </div>

          <div className="md:flex h-full flex-col gap-2 lg:gap-2">
            <Reveal
              delay={2000}
              className="relative flex flex-[4] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-blue-600 p-5 text-white lg:flex-[3]"
            >
              <article className="mt-auto">
                <p>
                  “Direct-owner pricing made everything transparent. Our guests are still talking
                  about it.”
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className="text-xl font-semibold">Ahmed R.</h2>
                    <p className="text-white/70">Corporate host · DIFC</p>
                  </div>
                  <img
                    src={IMAGES.guillermoBlue}
                    alt="Ahmed R."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </Reveal>
            <Reveal
              delay={2400}
              className="relative flex flex-[6] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-primary p-5 text-primary-foreground lg:flex-[7]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff26_1px,transparent_1px),linear-gradient(to_bottom,#ffffff26_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="mt-auto">
                <p>
                  “We shot an entire brand campaign aboard the Lumen 76 — every frame usable, styled
                  perfectly by the deck crew.”
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className="text-xl font-semibold">Maya C.</h2>
                    <p className="text-primary-foreground/70">Creative director</p>
                  </div>
                  <img
                    src={IMAGES.paul}
                    alt="Maya C."
                    width={200}
                    height={200}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;
