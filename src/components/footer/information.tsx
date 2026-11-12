"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function LegalInformation() {
  const { t } = useLanguage();

  return (
    <nav className="flex flex-wrap gap-5.75 font-semibold text-[#625452] [&_a:hover]:text-[#b51f28]" aria-label="Legal information">
      <Link href="/terms">{t("terms")}</Link>
      <Link href="/privacy">{t("privacy")}</Link>
    </nav>
  );
}
