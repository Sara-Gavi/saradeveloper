import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const profileImage = PlaceHolderImages.find((p) => p.id === "sara-profile");

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Sara Gavilán: Junior Web Developer
            </h1>
            <h2 className="max-w-[700px] text-foreground/80 md:text-xl font-body mx-auto lg:mx-0">
              Code, Data, and Creativity. My focus: technology as a tool to
              drive sustainability and social progress.
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link
                  href="https://www.linkedin.com/in/saragavilan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
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
                className="rounded-full object-cover aspect-square shadow-2xl border-2 border-amber-300"
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
