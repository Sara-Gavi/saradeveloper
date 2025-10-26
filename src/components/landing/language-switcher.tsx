"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  // Mantener anchors (#projects) al cambiar de idioma
  const [pathOnly, hash = ""] = pathname.split("#");
  const basePath = pathOnly.replace(/^\/en/, "") || "/";
  const hashPart = hash ? `#${hash}` : "";

  return (
    <div className="flex items-center gap-2">
      {/* Español */}
      <Button
        asChild
        size="sm"
        className={cn(
          "rounded-full px-3 h-8 bg-accent text-accent-foreground hover:bg-accent/90",
          !isEnglish ? "opacity-100" : "opacity-70"
        )}
      >
        <Link href={`${basePath}${hashPart}`}>ES</Link>
      </Button>

      {/* Inglés */}
      <Button
        asChild
        size="sm"
        className={cn(
          "rounded-full px-3 h-8 bg-accent text-accent-foreground hover:bg-accent/90",
          isEnglish ? "opacity-100" : "opacity-70"
        )}
      >
        <Link href={`/en${basePath === "/" ? "" : basePath}${hashPart}`}>
          EN
        </Link>
      </Button>
    </div>
  );
}
