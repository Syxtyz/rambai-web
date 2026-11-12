"use client";

import { useLanguage } from "@/components/language-provider";

export default function AboutContent() {
  const { t } = useLanguage();
  const cards = [
    { title: t("aboutCardOneTitle"), copy: t("aboutCardOneCopy"), icon: "01" },
    { title: t("aboutCardTwoTitle"), copy: t("aboutCardTwoCopy"), icon: "02" },
    { title: t("aboutCardThreeTitle"), copy: t("aboutCardThreeCopy"), icon: "03" },
  ];

  return (
    <div className="py-[70px] pb-[100px] max-[620px]:py-[52px] max-[620px]:pb-[74px]">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] max-[620px]:w-[min(100%-34px,480px)]">
        <header className="mb-[38px] max-w-[760px]">
          <span className="inline-flex items-center gap-[9px] text-[0.75rem] font-extrabold tracking-[0.13em] text-[#b51f28] uppercase before:h-0.5 before:w-5 before:rounded-full before:bg-current before:content-['']">{t("aboutEyebrow")}</span>
          <h1 className="my-[19px] max-w-[670px] text-[clamp(2.6rem,5.2vw,4rem)] leading-[0.99] font-extrabold tracking-[-0.065em] max-[620px]:text-[clamp(2.6rem,11vw,3.6rem)]">{t("aboutTitle")}</h1>
          <p className="max-w-[560px] text-[1.06rem] leading-[1.8] text-[#756766]">{t("aboutDescription")}</p>
        </header>
        <section className="grid grid-cols-2 gap-4 max-[620px]:grid-cols-1" aria-label={t("aboutEyebrow")}>
          {cards.map((card) => (
            <article className="rounded-[20px] border border-[#eadbd8] bg-[#fffdfc]/85 p-[25px]" key={card.icon}>
              <span className="mb-[18px] grid size-[38px] place-items-center rounded-xl bg-[#f6dedd] font-extrabold text-[#b51f28]" aria-hidden="true">{card.icon}</span>
              <h2 className="mb-[9px] text-[1.08rem] font-bold tracking-[-0.025em]">{card.title}</h2>
              <p className="text-[0.91rem] leading-[1.75] text-[#756766]">{card.copy}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
