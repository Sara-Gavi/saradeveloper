import "../globals.css";
import en from "@/messages/en.json";
import LangProvider from "@/components/providers/LangProvider";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased bg-background text-foreground">
        <LangProvider messages={en}>{children}</LangProvider>
      </body>
    </html>
  );
}
