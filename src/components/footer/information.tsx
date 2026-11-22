"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function LegalInformation() {
  const { t } = useLanguage();

  return (
    <nav className="flex flex-wrap gap-24 font-semibold text-[#000000] [&_a:hover]:text-[#b51f28] max-[800px]:gap-14 max-[620px]:w-full max-[620px]:justify-between max-[620px]:gap-8 max-[420px]:grid max-[420px]:grid-cols-2" aria-label="Footer links">
      <div className="flex min-w-[110px] flex-col gap-1.5">
        <p className="mb-1 text-[0.68rem] font-extrabold tracking-[0.12em] text-[#a18e8b] uppercase">Application</p>
        <Link className="opacity-75" href="/download">{t("download")}</Link>
        <Link className="opacity-75" href="/whats-new">{t("whatsNew")}</Link>
      </div>
      <div className="flex min-w-[110px] flex-col gap-1.5">
        <p className="mb-1 text-[0.68rem] font-extrabold tracking-[0.12em] text-[#a18e8b] uppercase">Legal</p>
        <Link className="opacity-75" href="/terms">{t("terms")}</Link>
        <Link className="opacity-75" href="/privacy">{t("privacy")}</Link>
      </div>
    </nav>
  );
}
