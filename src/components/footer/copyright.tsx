"use client";

import { useLanguage } from "@/components/language-provider";

export default function Copyright() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return <p className="footer-copyright">© {year} RambAI. {t("copyright")}</p>;
}
