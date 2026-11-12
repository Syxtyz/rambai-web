"use client";

import { useLanguage } from "@/components/language-provider";

export default function DownloadContent() {
  const { t } = useLanguage();

  return (
    <div className="py-17.5 pb-25 max-[620px]:py-13 max-[620px]:pb-18.5">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] max-[620px]:w-[min(100%-34px,480px)]">
        <header className="mb-9.5 max-w-190">
          <span className="inline-flex items-center gap-2.25 text-[0.75rem] font-extrabold tracking-[0.13em] text-[#b51f28] uppercase before:h-0.5 before:w-5 before:rounded-full before:bg-current before:content-['']">{t("downloadEyebrow")}</span>
          <h1 className="my-4.75 max-w-167.5 text-[clamp(2.6rem,5.2vw,4rem)] leading-[0.99] font-extrabold tracking-[-0.065em] max-[620px]:text-[clamp(2.6rem,11vw,3.6rem)]">{t("downloadTitle")}</h1>
          <p className="max-w-140 text-[1.06rem] leading-[1.8] text-[#756766]">{t("downloadDescription")}</p>
        </header>
        <section className="flex items-center justify-between gap-6.25 rounded-[20px] border border-[#efd2cf] bg-[linear-gradient(115deg,#fff8f7,#f6e3e0)] p-6.25 max-[620px]:flex-col max-[620px]:items-start" aria-label={t("androidApp")}>
          <div className="flex items-center gap-4.25">
            <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-[#b51f28] text-[1.35rem] font-extrabold text-white" aria-hidden="true">A</span>
            <div>
              <h2 className="mb-1.25 text-[1rem] font-bold">{t("androidApp")}</h2>
              <p className="text-[0.83rem] leading-normal text-[#756766]">{t("apkFormat")}</p>
            </div>
          </div>
          <a className="inline-flex min-h-12.25 items-center justify-center gap-2.5 rounded-[13px] bg-[#b51f28] px-4.75 text-[0.9rem] font-bold text-white shadow-[0_9px_18px_rgba(142,24,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#8e1820]" href="/assets/app-release/app-release.apk" download="RambAI.apk">
            {t("downloadApk")} <span className="text-[1.05rem]" aria-hidden="true">↓</span>
          </a>
        </section>
      </div>
    </div>
  );
}
