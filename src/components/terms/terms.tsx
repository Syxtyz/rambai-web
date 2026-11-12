"use client";

import { useLanguage } from "@/components/language-provider";

export default function TermsContent() {
  const { t } = useLanguage();
  const sections = [
    { title: t("termsUseTitle"), copy: t("termsUseCopy") },
    { title: t("termsResultsTitle"), copy: t("termsResultsCopy") },
    { title: t("termsAvailabilityTitle"), copy: t("termsAvailabilityCopy") },
  ];

  return (
    <div className="py-[70px] pb-[100px] max-[620px]:py-[52px] max-[620px]:pb-[74px]">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] max-[620px]:w-[min(100%-34px,480px)]">
        <header className="mb-[38px] max-w-[760px]">
          <span className="inline-flex items-center gap-[9px] text-[0.75rem] font-extrabold tracking-[0.13em] text-[#b51f28] uppercase before:h-0.5 before:w-5 before:rounded-full before:bg-current before:content-['']">{t("termsEyebrow")}</span>
          <h1 className="my-[19px] max-w-[670px] text-[clamp(2.6rem,5.2vw,4rem)] leading-[0.99] font-extrabold tracking-[-0.065em] max-[620px]:text-[clamp(2.6rem,11vw,3.6rem)]">{t("termsTitle")}</h1>
          <p className="max-w-[560px] text-[1.06rem] leading-[1.8] text-[#756766]">{t("termsIntro")}</p>
        </header>
        <section className="max-w-[790px] space-y-[14px]" aria-label={t("termsTitle")}>
          {sections.map((section) => (
            <article className="rounded-[20px] border border-[#eadbd8] bg-[#fffdfc]/85 p-[25px]" key={section.title}>
              <h2 className="mb-[9px] text-[1.08rem] font-bold tracking-[-0.025em]">{section.title}</h2>
              <p className="text-[0.91rem] leading-[1.75] text-[#756766]">{section.copy}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
