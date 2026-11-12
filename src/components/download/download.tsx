"use client";

import { useLanguage } from "@/components/language-provider";

export default function DownloadContent() {
  const { t } = useLanguage();

  return (
    <div className="py-[70px] pb-[100px] max-[620px]:py-[52px] max-[620px]:pb-[74px]">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] max-[620px]:w-[min(100%-34px,480px)]">
        <header className="mb-[38px] max-w-[760px]">
          <span className="inline-flex items-center gap-[9px] text-[0.75rem] font-extrabold tracking-[0.13em] text-[#b51f28] uppercase before:h-0.5 before:w-5 before:rounded-full before:bg-current before:content-['']">{t("downloadEyebrow")}</span>
          <h1 className="my-[19px] max-w-[670px] text-[clamp(2.6rem,5.2vw,4rem)] leading-[0.99] font-extrabold tracking-[-0.065em] max-[620px]:text-[clamp(2.6rem,11vw,3.6rem)]">{t("downloadTitle")}</h1>
          <p className="max-w-[560px] text-[1.06rem] leading-[1.8] text-[#756766]">{t("downloadDescription")}</p>
        </header>
        <section className="flex items-center justify-between gap-[25px] rounded-[20px] border border-[#efd2cf] bg-[linear-gradient(115deg,#fff8f7,#f6e3e0)] p-[25px] max-[620px]:flex-col max-[620px]:items-start" aria-label={t("androidApp")}>
          <div className="flex items-center gap-[17px]">
            <span className="grid size-[52px] shrink-0 place-items-center rounded-2xl bg-[#b51f28] text-[1.35rem] font-extrabold text-white" aria-hidden="true">A</span>
            <div>
              <h2 className="mb-[5px] text-[1rem] font-bold">{t("androidApp")}</h2>
              <p className="text-[0.83rem] leading-[1.5] text-[#756766]">{t("apkFormat")}</p>
            </div>
          </div>
          <a className="inline-flex min-h-[49px] items-center justify-center gap-2.5 rounded-[13px] bg-[#b51f28] px-[19px] text-[0.9rem] font-bold text-white shadow-[0_9px_18px_rgba(142,24,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8e1820]" href="/assets/app-release/app-release.apk" download="RambAI.apk">
            {t("downloadApk")} <span className="text-[1.05rem]" aria-hidden="true">↓</span>
          </a>
        </section>
      </div>
    </div>
  );
}
