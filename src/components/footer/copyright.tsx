"use client";

import { useLanguage } from "@/components/language-provider";

export default function Copyright() {
  const { t } = useLanguage();

  return <p className="m-0 max-[620px]:w-full">© 2026 RambAI. {t("copyright")}</p>;
}
