"use client";

import { useState, useEffect } from "react";

function CampIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M7 21l5-16 5 16" />
      <path d="M10 21l2-5 2 5" />
      <path d="M4.5 21l5-16" />
      <path d="M19.5 21l-5-16" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-5-5-11-5-11z" />
      <path d="M7 13a5 5 0 0010 0" />
    </svg>
  );
}

function HotTubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="16" width="20" height="4" rx="2" />
      <path d="M4 16v-2a2 2 0 012-2h12a2 2 0 012 2v2" />
      <path d="M6 12V8" />
      <path d="M10 12V8" />
      <path d="M14 12V8" />
      <path d="M18 12V8" />
      <path d="M8 6V4" />
      <path d="M16 6V4" />
    </svg>
  );
}

function HikeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 5.5a2 2 0 10-3 0" />
      <path d="M10 21l2-10 5 10" />
      <path d="M7 10l3-1 2 3" />
      <path d="M17 10l-5-2 3-5" />
      <path d="M14 14l3 4" />
      <path d="M4 19l5-2 3" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  );
}

const options = [
  {
    title: "Luxury Tent",
    description: "Cozy glamping under the stars",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    icon: <CampIcon />,
  },
  {
    title: "Campfire Feast",
    description: "Gourmet s'mores & stories",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    icon: <FireIcon />,
  },
  {
    title: "Lakeside Retreat",
    description: "Private dock & canoe rides",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: <WaterIcon />,
  },
  {
    title: "Mountain Spa",
    description: "Outdoor sauna & hot tub",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    icon: <HotTubIcon />,
  },
  {
    title: "Guided Adventure",
    description: "Expert-led nature tours",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    icon: <HikeIcon />,
  },
];

export function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex min-h-[400px] flex-col items-center justify-center bg-[#222] px-4 py-12 font-sans text-white sm:px-6 md:min-h-[500px]">
      <div className="mb-2 w-full max-w-2xl text-center">
        <h1 className="animate-fadeInTop delay-300 mb-3 text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
          Escape in Style
        </h1>
        <p className="animate-fadeInTop delay-600 mx-auto max-w-xl text-base font-medium text-gray-300 sm:text-lg md:text-xl">
          Discover luxurious camping experiences in nature&apos;s most breathtaking spots.
        </p>
      </div>

      <div className="h-8 md:h-12" />

      {/* Mobile: vertical stack */}
      <div className="flex w-full max-w-[900px] flex-col gap-2 md:hidden">
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isAnimated = animatedOptions.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
                isActive ? "h-[280px]" : "h-[72px]"
              }`}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? "translateY(0)" : "translateY(-20px)",
                borderRadius: "12px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isActive ? "#fff" : "#292929",
                backgroundColor: "#18181b",
                boxShadow: isActive
                  ? "0 20px 60px rgba(0,0,0,0.50)"
                  : "0 10px 30px rgba(0,0,0,0.30)",
              }}
            >
              <div
                className="pointer-events-none absolute left-0 right-0 transition-all duration-700 ease-in-out"
                style={{
                  bottom: isActive ? "0" : "-40px",
                  height: "120px",
                  boxShadow: isActive
                    ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000"
                    : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
                }}
              />

              <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-[2] flex items-center gap-3 px-4">
                <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#444] bg-[rgba(32,32,32,0.85)] shadow-[0_1px_4px_rgba(0,0,0,0.18)] backdrop-blur-[10px] transition-all duration-200">
                  {option.icon}
                </div>
                <div className="relative min-w-0">
                  <div
                    className="truncate text-base font-bold text-white transition-all duration-700 ease-in-out sm:text-lg"
                    style={{
                      opacity: isActive ? 1 : 0.7,
                      transform: isActive ? "translateY(0)" : "translateY(-2px)",
                    }}
                  >
                    {option.title}
                  </div>
                  {isActive && (
                    <div className="mt-0.5 truncate text-sm text-gray-300">
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: horizontal accordion */}
      <div
        className="mx-0 hidden h-[400px] w-full max-w-[900px] items-stretch overflow-hidden md:flex"
        style={{ direction: "ltr" }}
      >
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isAnimated = animatedOptions.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className="option relative flex cursor-pointer flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
                backfaceVisibility: "hidden",
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? "translateX(0)" : "translateX(-60px)",
                minWidth: "60px",
                minHeight: "100px",
                margin: 0,
                borderRadius: 0,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: isActive ? "#fff" : "#292929",
                backgroundColor: "#18181b",
                boxShadow: isActive
                  ? "0 20px 60px rgba(0,0,0,0.50)"
                  : "0 10px 30px rgba(0,0,0,0.30)",
                flex: isActive ? "7 1 0%" : "1 1 0%",
                zIndex: isActive ? 10 : 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
                overflow: "hidden",
                willChange: "flex-grow, box-shadow, background-size, background-position",
              }}
            >
              <div
                className="shadow pointer-events-none absolute left-0 right-0 transition-all duration-700 ease-in-out"
                style={{
                  bottom: isActive ? "0" : "-40px",
                  height: "120px",
                  boxShadow: isActive
                    ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000"
                    : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
                }}
              />

              <div className="label pointer-events-none absolute bottom-5 left-0 right-0 z-[2] flex h-12 w-full items-center justify-start gap-3 px-4">
                <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#444] bg-[rgba(32,32,32,0.85)] shadow-[0_1px_4px_rgba(0,0,0,0.18)] backdrop-blur-[10px] transition-all duration-200">
                  {option.icon}
                </div>
                <div className="relative whitespace-pre text-white">
                  <div
                    className="main text-lg font-bold transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(25px)",
                    }}
                  >
                    {option.title}
                  </div>
                  <div
                    className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(25px)",
                    }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeInFromTop {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}
