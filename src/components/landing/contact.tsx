"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { useLang } from "@/hooks/useLang";

export function Contact() {
  const t = useLang("contact");

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl font-headline">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground font-body">{t("text")}</p>
          <div className="flex justify-center gap-4">
            {portfolioData.contact.socials.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="ghost"
                size="icon"
                className="h-24 w-24 rounded-full hover:bg-accent/10"
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-20 w-20 text-foreground/80 transition-colors hover:text-primary" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
