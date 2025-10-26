"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import placeholderData from "@/lib/placeholder-images.json";
import { useLang } from "@/hooks/useLang";

export function Hero() {
  const t = useLang("hero");

  const profileImage = placeholderData.placeholderImages.find(
    (p) => p.id === "sara-profile"
  );

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              {t("title")}
            </h1>
            <h2 className="max-w-[700px] text-foreground/80 md:text-xl font-body mx-auto lg:mx-0">
              {t("subtitle")}
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="#projects">{t("viewProjects")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link
                  href="https://www.linkedin.com/in/saragavilan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("connectLinkedin")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square shadow-[0_0_40px_5px_rgba(255,249,196,0.6)]"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
