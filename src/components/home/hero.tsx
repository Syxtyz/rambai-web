"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const eyebrowClass = "inline-flex items-center gap-[9px] text-[0.75rem] font-extrabold tracking-[0.13em] text-[#b51f28] uppercase before:h-0.5 before:w-5 before:rounded-full before:bg-current before:content-['']";
const primaryButtonClass = "inline-flex min-h-[49px] items-center justify-center gap-2.5 rounded-[13px] border border-transparent bg-[#b51f28] px-[19px] text-[0.9rem] font-bold text-white shadow-[0_9px_18px_rgba(142,24,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8e1820] hover:shadow-[0_12px_22px_rgba(142,24,32,0.22)]";

export default function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="grid min-h-[530px] grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] items-center gap-[clamp(32px,7vw,90px)] max-[800px]:min-h-[430px] max-[800px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] max-[800px]:gap-6 max-[620px]:grid-cols-1 max-[620px]:gap-[5px]" aria-labelledby="home-title">
      <div>
        <span className={eyebrowClass}>{t("homeEyebrow")}</span>
        <h1 id="home-title" className="my-[19px] mb-[21px] max-w-[670px] text-[clamp(2.7rem,5.6vw,4.65rem)] leading-[0.99] font-extrabold tracking-[-0.065em] max-[800px]:text-[clamp(2.6rem,6vw,3.6rem)] max-[620px]:max-w-[500px] max-[620px]:text-[clamp(2.8rem,12vw,4rem)]">
          {t("homeTitleStart")} <span className="text-[#b51f28]">{t("homeTitleEnd")}</span>
        </h1>
        <p className="max-w-[560px] text-[1.06rem] leading-[1.8] text-[#756766] max-[620px]:text-[0.98rem]">{t("homeDescription")}</p>
        <div className="mt-[31px] flex flex-wrap gap-3">
          <Link className={primaryButtonClass} href="/download">
            {t("getApp")} <span className="text-[1.05rem]" aria-hidden="true">↗</span>
          </Link>
          <Link className="inline-flex min-h-[49px] items-center justify-center gap-2.5 rounded-[13px] border border-[#eadbd8] bg-[#fffdfc]/70 px-[19px] text-[0.9rem] font-bold text-[#29201f] transition hover:-translate-y-0.5 hover:bg-[#fffdfc]" href="/about">
            {t("learnAbout")}
          </Link>
        </div>
        <div className="mt-[37px] flex items-center gap-[11px] text-[0.83rem] text-[#756766] max-[620px]:mt-6">
          <span className="grid size-[25px] place-items-center rounded-full bg-[#e2f4e9] text-[0.78rem] font-black text-[#168a55]" aria-hidden="true">✓</span>
          <span>{t("quickResults")}</span>
        </div>
      </div>
      <AppPreview />
    </section>
  );
}

function AppPreview() {
  const { t } = useLanguage();

  return (
    <div className="relative grid min-h-[510px] place-items-center isolate max-[800px]:min-h-[430px] max-[620px]:min-h-[440px] max-[620px]:mt-0.5" aria-label={t("quickResults")}>
      <div className="absolute -z-10 aspect-square w-[min(430px,92%)] rounded-full bg-[radial-gradient(circle,#f5d8d5_0%,rgba(245,216,213,0.5)_53%,rgba(245,216,213,0)_73%)]" />
      <div className="w-[min(330px,82%)] rotate-2 rounded-[29px] border border-white/85 bg-[#fffdfc] p-[17px] shadow-[0_28px_70px_rgba(81,39,38,0.17),0_3px_12px_rgba(81,39,38,0.06)] max-[620px]:w-[min(325px,84%)]">
        <div className="flex items-center gap-[9px] px-px pt-px pb-[14px]">
          <span className="grid size-[29px] place-items-center rounded-[9px] bg-[#b51f28] text-white" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 25 25" fill="none"><circle cx="10.8" cy="10.8" r="6.3" stroke="white" strokeWidth="2.5" /><path d="m15.4 15.4 5.1 5.1" stroke="white" strokeWidth="2.5" strokeLinecap="round" /><circle cx="10.8" cy="10.8" r="2.1" fill="white" /></svg>
          </span>
          <span><span className="block text-[0.76rem] font-extrabold">RambAI</span><span className="mt-0.5 block text-[0.53rem] font-bold text-[#b51f28]">Rambutan Grading</span></span>
        </div>
        <div className="relative min-h-[157px] overflow-hidden rounded-[19px] bg-[radial-gradient(ellipse_at_90%_85%,rgba(255,211,151,0.64),transparent_36%),linear-gradient(135deg,#ba2029,#a51b24)] p-[19px] text-white after:absolute after:right-[11px] after:-bottom-[17px] after:size-[116px] after:rounded-full after:border-[13px] after:border-dotted after:border-[#d84232] after:bg-[radial-gradient(ellipse,#f1c59a_0_33%,#e8a779_35%_45%,transparent_47%)] after:opacity-90 after:shadow-[inset_0_0_0_8px_rgba(244,176,117,0.25)] after:content-['']">
          <h2 className="relative z-[1] mb-1.5 max-w-[165px] text-[1.02rem] leading-[1.1] font-extrabold">{t("scanTitle")}</h2>
          <p className="relative z-[1] max-w-[145px] text-[0.63rem] leading-[1.45] text-white/85">{t("scanDescription")}</p>
          <span className="relative z-[1] mt-3 inline-flex rounded-full bg-white/20 px-[11px] py-1.5 text-[0.61rem] font-bold">{t("scanButton")} &nbsp; →</span>
        </div>
        <GradeFilter />
        <div className="mx-px mt-1 mb-[9px] flex justify-between text-[0.7rem] font-extrabold"><span>{t("recentBatches")}</span><span className="text-[0.59rem] text-[#b51f28]">{t("viewAll")} →</span></div>
        <div className="grid grid-cols-[1fr_auto] gap-x-2.5 gap-y-[3px] rounded-[13px] border border-[#f1e8e6] bg-white p-3"><strong className="text-[0.67rem]">{t("batchTwo")}</strong><small className="text-[0.54rem] text-[#9a8987]">3m ago</small><small className="text-[0.54rem] text-[#9a8987]">28 pcs</small><small className="text-[0.54rem] text-[#9a8987]">Class I</small><span className="col-span-2 mt-[5px] text-[0.55rem] font-extrabold text-[#b51f28]">BATCH VALUE &nbsp; ₱0.00</span></div>
      </div>
      <div className="absolute -right-1.5 bottom-[83px] flex items-center gap-2.5 rounded-[15px] border border-[#eadbd8]/80 bg-[#fffdfc]/92 px-[15px] py-3 text-[0.67rem] font-bold shadow-[0_13px_30px_rgba(81,39,38,0.1)] max-[800px]:-right-3 max-[620px]:right-0 max-[620px]:bottom-11"><span className="grid size-7 place-items-center rounded-[9px] bg-[#e2f4e9] text-[0.8rem] text-[#168a55]" aria-hidden="true">✓</span><span>{t("featureResults")}</span></div>
    </div>
  );
}

function GradeFilter() {
  const { t } = useLanguage();
  const grades = [
    { icon: "✓", label: t("categoryAll"), active: true },
    { icon: "✦", label: t("classI"), active: false },
    { icon: "✦", label: t("classII"), active: false },
    { icon: "⌕", label: t("reject"), active: false },
  ];

  return (
    <div className="my-[15px] mx-0.5 grid grid-cols-4 gap-2 mb-[14px]" aria-label="Grading categories">
      {grades.map((grade) => (
        <div className={`flex min-h-[47px] flex-col items-center justify-center gap-1 rounded-xl text-[0.5rem] font-semibold ${grade.active ? "bg-[#f9e4e2] text-[#b51f28]" : "bg-[#fbf5f4] text-[#7b6a68]"}`} key={grade.label}>
          <span className="grid size-[19px] place-items-center rounded-full bg-white text-[0.65rem] text-[#b51f28]">{grade.icon}</span>
          {grade.label}
        </div>
      ))}
    </div>
  );
}
