"use client";

import { createContext } from "react";
import { Toaster } from "@/components/ui/toaster";

export const LangContext = createContext<Record<string, any>>({});

export default function LangProvider({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: Record<string, any>;
}) {
  return (
    <LangContext.Provider value={messages}>
      {children}
      <Toaster />
    </LangContext.Provider>
  );
}
