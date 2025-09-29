"use client";
import React from "react";
import BlackHole from "./components/BlackHole";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TrustedBy from "./components/TrustedBy";
import IntegrationHero from "./components/IntegrationHero";
import Galaxy from "./components/Galaxy";

export default function Page() {
  return (
    <main className="mesh-bg min-h-screen">
      {/* Hero */}

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="pointer-events-none absolute inset-0 h-full w-full">
            <Galaxy
              mouseRepulsion={true}
              mouseInteraction={true}
              density={1}
              glowIntensity={0.3}
              saturation={0}
              hueShift={210}
              twinkleIntensity={0.3}
              rotationSpeed={0.1}
              repulsionStrength={2}
              autoCenterRepulsion={20}
              starSpeed={0.5}
              speed={1}
            />
          </div>
          <div className="relative overflow-hidden rounded-[28px]">
            <div className="relative z-[1] p-8 sm:p-4 md:p-8 text-center">
              <div className="mx-auto mb-6 w-fit rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-xs text-indigo-300">
                We&apos;ve announced AI X+ GenKit 0.9 — check it out
              </div>
              <h1 className="section-title">
                The easiest way to power up your business with AI
              </h1>
              <p className="section-subtitle mx-auto mt-5">
                Launch smarter workflows in minutes with our trustworthy AI
                platform. Automate, analyze, and accelerate growth with
                futuristic tooling.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a className="btn-primary" href="#get-started">
                  Get started
                </a>
                <a className="btn-ghost" href="#learn-more">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Marketing Channels */}
      <IntegrationHero />
      {/* Trusted By */}
      <TrustedBy />
      {/* Features */}
      <section id="features" className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title text-center text-3xl md:text-4xl">
            All you need to integrate AI with your plan
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Works in mobile",
                desc: "Native-quality experiences across platforms with responsive components.",
              },
              {
                title: "Integrated with more apps",
                desc: "Connect Slack, Notion, HubSpot, Stripe, and 50+ services.",
              },
              {
                title: "Automate reports",
                desc: "Generate weekly KPIs and summaries delivered to your inbox.",
              },
            ].map((f) => (
              <div key={f.title} className="card p-6">
                <div className="mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500/80" />
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title text-center text-3xl md:text-4xl">
            Hear what our customers say
          </h2>
          <div className="mt-10">
            <TestimonialCarousel />
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="section-title text-center text-3xl md:text-4xl">
            Meet the team behind AI X+
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[11, 12, 13, 14, 15, 16, 17, 18].map((i) => (
              <div key={i} className="card overflow-hidden">
                <img
                  src={`https://i.pravatar.cc/400?img=${i}`}
                  alt="team"
                  className="h-56 w-full object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold">Sophie Moore</div>
                  <div className="text-sm text-slate-400">Product Designer</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="section pt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="text-xl font-bold text-white">AI X+</div>
              <p className="mt-3 text-sm text-slate-400 max-w-xs">
                Futuristic, trustworthy AI platform for modern teams.
              </p>
            </div>
            <div>
              <div className="mb-3 font-semibold">Main pages</div>
              <ul className="space-y-2 text-sm text-slate-400">
                {["Home V1", "Home V2", "Blog", "Pricing", "Contact"].map(
                  (l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-white">
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold">Utility pages</div>
              <ul className="space-y-2 text-sm text-slate-400">
                {["Style guide", "Changelog", "Licenses", "Password"].map(
                  (l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-white">
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="card p-6">
              <div className="text-white font-semibold">
                The easiest way to power up your business with AI
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Start your free trial. No credit card required.
              </p>
              <a href="#get-started" className="mt-4 inline-block btn-primary">
                Get started
              </a>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-500">
            <div>© {new Date().getFullYear()} AI X+. All rights reserved.</div>
            <div className="flex items-center gap-4">
              {["x", "github", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 inline-flex items-center justify-center"
                >
                  ★
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
