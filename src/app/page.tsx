// src/app/page.tsx
"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    // ─── SMOKE-TEST WRAPPER ─────────────────────────────────────────────────
    <div className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
      {/* <h1 className="p-8 text-4xl font-bold">
        If this text is light on navy, Tailwind’s working.
      </h1> */}

      {/* ─── Your normal content below ─────────────────────────────────── */}
      <main>
        <CustomCursor />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
