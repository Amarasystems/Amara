"use client";
import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Icons, type IconSpec } from "./icons";

export type IntegrationHeroProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  ctaHref?: string;
  icons?: IconSpec[];
};

// Default icon set
const DEFAULT_ICONS: IconSpec[] = [
  { id: 1, name: "Facebook", href: "#", size: "lg", Icon: Icons.Facebook },
  { id: 2, name: "Discord", href: "#", size: "md", Icon: Icons.Discord },
  { id: 3, name: "LinkedIn", href: "#", size: "md", Icon: Icons.LinkedIn },
  { id: 4, name: "YouTube", href: "#", size: "sm", Icon: Icons.YouTube },
  { id: 5, name: "Google", href: "#", size: "sm", Icon: Icons.Google },
  { id: 6, name: "Pinterest", href: "#", size: "md", Icon: Icons.Pinterest },
  { id: 7, name: "Messenger", href: "#", size: "lg", Icon: Icons.Messenger },
  { id: 8, name: "X (Twitter)", href: "#", size: "sm", Icon: Icons.TwitterX },
  { id: 9, name: "Twitch", href: "#", size: "md", Icon: Icons.Twitch },
  { id: 10, name: "Pinterest 2", href: "#", size: "sm", Icon: Icons.Pinterest },
  { id: 11, name: "Google 2", href: "#", size: "sm", Icon: Icons.Google },
  { id: 12, name: "YouTube 2", href: "#", size: "md", Icon: Icons.YouTube },
];

// Predefined absolute positions for md and up to keep bubbles away from center content
// Each position also has a depth (parallax intensity factor)
const layoutMap = [
  { top: "6%", left: "8%", depth: 0.6 },
  { top: "18%", left: "22%", depth: 0.4 },
  { top: "70%", left: "18%", depth: 0.5 },
  { top: "84%", left: "35%", depth: 0.3 },
  { top: "12%", right: "10%", depth: 0.6 },
  { top: "30%", right: "22%", depth: 0.4 },
  { bottom: "8%", right: "14%", depth: 0.5 },
  { bottom: "18%", left: "8%", depth: 0.6 },
  { top: "48%", left: "6%", depth: 0.5 },
  { top: "54%", right: "8%", depth: 0.5 },
  { top: "8%", left: "45%", depth: 0.2 },
  { bottom: "10%", right: "45%", depth: 0.2 },
] as const;

// Helper sizes
const sizePx = { sm: 48, md: 64, lg: 88 } as const;

// Given mouse position relative to center, compute a small parallax offset
function useParallax(max = 20) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });
  return {
    x,
    y,
    set: (dx: number, dy: number, depth = 1) => {
      mx.set((dx / 100) * max * depth);
      my.set((dy / 100) * max * depth);
    },
  };
}

export default function IntegrationHero({
  title = "Connect with your favorite apps",
  eyebrow = "INTEGRATIONS",
  description = "Plan, automate and analyze content across all major platforms. Build delightful workflows with deep integrations and robust analytics.",
  ctaHref = "/integrations",
  icons = DEFAULT_ICONS,
}: IntegrationHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // Parallax state
  const parallax = useParallax(20);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // dx/dy relative to center
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    parallax.set(dx, dy, 1);
  };

  const gridIcons = useMemo(() => icons.slice(0, 12), [icons]);

  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B12] py-24 md:py-36">
      {/* background gradient/vignette and slow drifting orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)] opacity-40" />
        <div className="absolute -top-20 -left-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => parallax.set(0, 0, 0)}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl px-6"
      >
        {/* Bubbles absolute on md+, grid on mobile */}
        <div aria-hidden className="hidden md:block">
          {gridIcons.map((item, i) => {
            const pos = layoutMap[i % layoutMap.length] as {
              top?: string;
              bottom?: string;
              left?: string;
              right?: string;
              depth: number;
            };
            const Icon = item.Icon;
            const duration = 6 + ((i * 37) % 4); // 6–9s
            const s = sizePx[item.size];
            return (
              <motion.button
                key={item.id + "-abs"}
                type="button"
                aria-label={item.name}
                onFocus={() => setHovered(item.id)}
                onBlur={() => setHovered(null)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className="group absolute rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                style={{ width: s, height: s, ...pos }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration, ease: "easeInOut", repeat: Infinity }}
                whileHover={{ y: -8, scale: 1.06 }}
              >
                <motion.div style={{ x: parallax.x, y: parallax.y }}>
                  {/* two-layer glossy ring */}
                  <div className="relative rounded-full p-[2px]">
                    <div className="rounded-full w-[60px] h-[60px] grid place-items-center x bg-[#0F111A]">
                      <Icon width={24} height={24} />
                    </div>
                  </div>
                </motion.div>
                {/* Tooltip */}
                <motion.div
                  role="tooltip"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: hovered === item.id ? 1 : 0,
                    scale: hovered === item.id ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-slate-900 shadow-lg"
                >
                  {item.name}
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Center column */}
        <div className="relative z-[1] text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          <p className="text-white/70 mt-4 mx-auto max-w-[60ch]">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center rounded-xl px-5 py-3 bg-white text-slate-900 hover:bg-white/90 transition"
          >
            Browse all integrations
          </Link>
        </div>

        {/* Mobile grid */}
        <div className="mt-10 grid grid-cols-3 gap-4 md:hidden">
          {gridIcons.map((item, i) => {
            const Icon = item.Icon;
            const duration = 6 + ((i * 37) % 4);
            const s = sizePx[item.size] - 8;
            return (
              <motion.button
                key={item.id + "-grid"}
                type="button"
                aria-label={item.name}
                className="group relative mx-auto rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                style={{ width: s, height: s }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration, ease: "easeInOut", repeat: Infinity }}
                whileHover={{ y: -8, scale: 1.06 }}
              >
                <div className="relative rounded-full p-[2px]">
                  <div className="rounded-full  w-[60px] h-[60px] grid place-items-center bg-[#0F111A]">
                    <Icon width={22} height={22} />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
