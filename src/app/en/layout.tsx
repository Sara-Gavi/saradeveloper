import "../globals.css";
import en from "@/messages/en.json";
import LangProvider from "@/components/providers/LangProvider";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LangProvider messages={en}>{children}</LangProvider>;
}
