"use client";

import { useLang } from "@/hooks/useLang";

export function About() {
  const t = useLang("about");

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl font-headline">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground font-body">{t("text")}</p>
        </div>
      </div>
    </section>
  );
}
