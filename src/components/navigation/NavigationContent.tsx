"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, type Language } from "@/components/language-provider";

export default function NavigationBarContent() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: t("about") },
    { href: "/download", label: t("download") },
  ];

  return (
    <div className="flex items-center gap-[clamp(16px,2.4vw,30px)] max-[800px]:gap-3.75 max-[620px]:w-full max-[620px]:justify-between max-[620px]:pt-0.5">
      <div className="flex items-center gap-[clamp(16px,2.4vw,30px)] max-[620px]:gap-4.25">
        {links.map((link) => (
          <Link
            key={link.href}
            className={link.href === "/download"
              ? "rounded-[10px] bg-[#b51f28] px-3.5 py-2 text-[0.85rem] font-bold text-white shadow-[0_5px_12px_rgba(142,24,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8e1820] max-[620px]:px-3 max-[620px]:text-[0.79rem]"
              : "text-[0.91rem] font-semibold text-[#625452] transition-colors hover:text-[#b51f28] aria-[current=page]:text-[#b51f28] max-[620px]:text-[0.82rem]"}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <label className="flex items-center gap-2 text-[0.8rem] font-semibold text-[#756766]">
        <span className="max-[800px]:hidden max-[620px]:inline">{t("language")}</span>
        <select
          className="min-w-28 cursor-pointer rounded-[10px] border border-[#eadbd8] bg-[#fffdfc] py-2 pr-7.25 pl-2.75 text-[#29201f] outline-none focus-visible:ring-3 focus-visible:ring-[#b51f28]/30 max-[620px]:min-w-26 max-[620px]:text-[0.79rem]"
          aria-label={t("language")}
          value={language}
          onChange={(event) => setLanguage(event.target.value as Language)}
        >
          <option value="ceb">Cebuano</option>
          <option value="tl">Tagalog</option>
          <option value="en">English</option>
        </select>
      </label>
    </div>
  );
}
