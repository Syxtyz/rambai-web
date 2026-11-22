"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function LegalInformation() {
  const { t } = useLanguage();

  return (
    <nav className="flex flex-wrap gap-40 font-semibold text-[#000000] [&_a:hover]:text-[#b51f28]" aria-label="Legal information">
      <div className="flex flex-col">
        <p className="font-black">Application</p>
        <Link className="opacity-75" href="/download">{t("download")}</Link>
        <Link className="opacity-75" href="/whats-new">{t("whatsNew")}</Link>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Legal</p>
        <Link className="opacity-75" href="/terms">{t("terms")}</Link>
        <Link className="opacity-75" href="/privacy">{t("privacy")}</Link>
      </div>
    </nav>
  );
}
