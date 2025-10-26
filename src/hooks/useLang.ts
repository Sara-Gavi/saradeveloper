"use client";

import { useContext } from "react";
import { LangContext } from "@/components/providers/LangProvider";

export function useLang(section: string) {
  const messages = useContext(LangContext);
  return (key: string) => messages?.[section]?.[key] ?? key;
}
