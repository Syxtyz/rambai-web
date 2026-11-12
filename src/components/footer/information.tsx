"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function LegalInformation() {
  const { t } = useLanguage();

  return (
    <nav className="footer-links" aria-label="Legal information">
      <Link href="/terms">{t("terms")}</Link>
      <Link href="/privacy">{t("privacy")}</Link>
    </nav>
  );
}
