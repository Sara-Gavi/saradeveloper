"use client";

import { useLang } from "@/hooks/useLang";

export function Footer() {
  const t = useLang("footer");

  return (
    <footer className="py-6 bg-card border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>{t("line1")}</p>
          <p className="text-xs mt-2">{t("line2")}</p>
        </div>
      </div>
    </footer>
  );
}
