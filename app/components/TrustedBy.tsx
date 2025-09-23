import React from "react";
import PartnerMarquee from "./PartnerMarquee";
import { ITEMS } from "@/data/partners";

export default function TrustedBy() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="section-title text-2xl md:text-3xl">
          Trusted by the best brands around the world
        </h2>
        <div className="mt-8">
          <PartnerMarquee items={ITEMS} speed={40} direction="rtl" />
        </div>
      </div>
    </section>
  );
}
