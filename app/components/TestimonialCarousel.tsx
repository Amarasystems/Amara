"use client";
import React, { useMemo } from "react";
import styles from "./TestimonialCarousel.module.css";

type Testimonial = {
  id: string;
  name: string;
  username: string;
  text: string;
  avatarUrl: string;
};

const DUMMY_TESTIMONIALS: Testimonial[] = Array.from({ length: 10 }).map(
  (_, i) => ({
    id: String(i + 1),
    name: [
      "Jordan Lee",
      "Maya Patel",
      "Luis Fernandez",
      "Ava Thompson",
      "Noah Kim",
      "Zara Ahmed",
      "Ethan Rossi",
      "Sofia Rivera",
      "Leo Martins",
      "Ivy Chen",
    ][i],
    username: [
      "@jordanl",
      "@mayap",
      "@lfernandez",
      "@avath",
      "@noahk",
      "@zaraa",
      "@erossi",
      "@sofiar",
      "@leom",
      "@ivychen",
    ][i],
    text: [
      "This platform makes automations feel effortless.",
      "We shipped an MVP in a weekend.",
      "Delightful dev experience and great docs.",
      "The analytics alone are worth it.",
      "Integrations were plug-and-play.",
      "Customer support is excellent.",
      "Runs fast and reliably.",
      "Saved us hours every week.",
      "Beautiful, modern UI.",
      "No-brainer for our team.",
    ][i],
    avatarUrl: `https://i.pravatar.cc/80?img=${i + 1}`,
  })
);

function Row({
  items,
  reverse,
  speed = 40,
}: {
  items: Testimonial[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate items to create infinite loop illusion
  const loopItems = useMemo(() => [...items, ...items], [items]);
  type StyleWithVar = React.CSSProperties & { "--speed"?: string };

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          reverse ? styles.animateRight : styles.animateLeft
        }`}
        style={{ "--speed": `${speed}s` } as StyleWithVar}
      >
        {loopItems.map((t, idx) => (
          <div key={`${t.id}-${idx}`} className={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={t.avatarUrl} alt={t.name} className={styles.avatar} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.username}>{t.username}</span>
              </div>
            </div>
            <p className={styles.text}>“{t.text}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialCarousel() {
  const top = useMemo(() => DUMMY_TESTIMONIALS.slice(0, 5), []);
  const bottom = useMemo(() => DUMMY_TESTIMONIALS.slice(5, 10), []);

  return (
    <section className={`${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.mask}>
          <div className={styles.scrollContainer}>
            <Row items={top} reverse={false} speed={42} />
          </div>
        </div>
        <div className={styles.mask} style={{ marginTop: 16 }}>
          <div className={styles.scrollContainer}>
            <Row items={bottom} reverse speed={38} />
          </div>
        </div>
      </div>
    </section>
  );
}
