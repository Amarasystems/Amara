"use client";
import React, { useMemo } from "react";

export type PartnerItem = {
  id: number;
  name: string;
  icon?: string;
  url?: string;
};

type Direction = "rtl" | "ltr";

export default function PartnerMarquee({
  items,
  speed = 40,
  direction = "rtl",
  className = "",
}: {
  items: PartnerItem[];
  speed?: number; // pixels per second
  direction?: Direction;
  className?: string;
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);

  // Convert pixels-per-second to duration using an approximate item-strip width.
  // We animate exactly one strip width (50%) per cycle, so duration scales with speed.
  // We pick 40 as base to map 40px/s ≈ 40s for a visually smooth pace.
  const durationSec = Math.max(4, Math.round((40 / Math.max(1, speed)) * 40));

  const trackClass =
    direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr";

  return (
    <div
      className={`marquee marquee-mask pause-on-hover ${className}`}
      style={{ ["--marquee-duration" as any]: `${durationSec}s` }}
    >
      <div className={`marquee-track ${trackClass}`}>
        {doubled.map((item, i) => {
          const Content = (
            <div
              key={`${item.id}-${i}`}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 opacity-70 transition hover:opacity-100 hover:scale-[1.02]"
              role={!item.url ? "img" : undefined}
              aria-label={!item.url ? item.name : undefined}
            >
              <span aria-hidden className="text-base">
                {item.icon ?? "•"}
              </span>
              <span className="whitespace-nowrap capitalize">{item.name}</span>
            </div>
          );

          if (item.url) {
            return (
              <a
                key={`${item.id}-${i}`}
                href={item.url}
                className="outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-full"
              >
                {Content}
              </a>
            );
          }
          return Content;
        })}
      </div>
    </div>
  );
}
