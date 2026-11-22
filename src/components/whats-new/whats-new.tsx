"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const releases = [
  {
    version: "1.0.5",
    date: "November 09, 2026",
    title: "whatsNewV105Title",
    copy: "whatsNewV105Copy",
    updates: false,
    items: [],
    latest: true,
  },
  {
    version: "1.0.4",
    date: "October 14, 2026",
    title: "whatsNewV104Title",
    copy: "whatsNewV104Copy",
    updates: false,
    items: [],
    latest: false,
  },
  {
    version: "1.0.3",
    date: "October 02, 2026",
    title: "whatsNewV103Title",
    copy: "whatsNewV103Copy",
    updates: true,
    items: ["whatsNewV103ItemOne", "whatsNewV103ItemTwo", "whatsNewV103ItemThree"],
    latest: false,
  },
  {
    version: "1.0.2",
    date: "September 29, 2026",
    title: "whatsNewV102Title",
    copy: "whatsNewV102Copy",
    updates: false,
    items: ["whatsNewV102ItemOne", "whatsNewV102ItemTwo", "whatsNewV102ItemThree"],
    latest: false,
  },
  {
    version: "1.0.1",
    date: "September 24, 2026",
    title: "whatsNewV101Title",
    copy: "whatsNewV101Copy",
    updates: false,
    items: ["whatsNewV101ItemOne", "whatsNewV101ItemTwo", "whatsNewV101ItemThree", "whatsNewV101ItemFour"],
    latest: false,
  },
] as const;

export default function WhatsNewContent() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-[#fffdf8] py-20 pb-28 max-[620px]:py-12 max-[620px]:pb-20">
      <div className="pointer-events-none absolute -top-36 right-[-10rem] size-[28rem] rounded-full bg-[#f8d9d5]/40 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto w-[min(1120px,calc(100%-48px))] max-[620px]:w-[min(100%-34px,480px)]">
        <header className="mb-14 max-w-3xl max-[620px]:mb-9">
          <h1 className="mb-5 max-w-3xl text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.96] font-extrabold tracking-[-0.07em] text-[#3d1f20] max-[620px]:text-[clamp(2.7rem,12vw,4rem)]">{t("whatsNewTitle")}</h1>
          <p className="max-w-2xl text-[1.06rem] leading-[1.8] text-[#756766]">{t("whatsNewDescription")}</p>
        </header>

        <section aria-labelledby="release-history-title">
          <div className="mb-8 flex items-end justify-between gap-5 max-[620px]:block">
            <h2 id="release-history-title" className="text-[clamp(1.8rem,3vw,2.6rem)] leading-none font-extrabold tracking-[-0.055em] text-[#3d1f20]">{t("whatsNewHistoryTitle")}</h2>
          </div>

          <div className="space-y-5">
            {releases.map((release) => (
              <article key={release.version} className={`rounded-[24px] border p-7 shadow-[0_10px_24px_rgba(142,24,32,0.05)] transition max-[620px]:p-5 ${release.latest ? "border-[#b51f28] bg-[linear-gradient(135deg,#b51f28,#8e1820)] text-white shadow-[0_16px_30px_rgba(142,24,32,0.2)]" : "border-[#efd2d0] bg-white/80"}`}>
                <div>
                  <div className="flex items-start justify-between gap-4 max-[620px]:flex-col max-[620px]:gap-2">
                    <div>
                      <span className={`text-[0.7rem] font-extrabold tracking-[0.14em] uppercase ${release.latest ? "text-white/70" : "text-[#b51f28]"}`}>Version {release.version}</span>
                      <p className={`mt-1 text-[0.78rem] font-medium ${release.latest ? "text-white/70" : "text-[#927c79]"}`}>{release.date}</p>
                      <h3 className={`mt-2 text-[1.3rem] leading-tight font-extrabold tracking-[-0.03em] ${release.latest ? "text-white" : "text-[#3d1f20]"}`}>{t(release.title)}</h3>
                    </div>
                    {release.latest && <span className="rounded-full bg-white/15 px-3 py-1.5 text-[0.7rem] font-bold text-white">{t("whatsNewCurrent")}</span>}
                  </div>

                  <p className={`mt-3 max-w-3xl text-[0.96rem] leading-[1.75] ${release.latest ? "text-white/85" : "text-[#756766]"}`}>{t(release.copy)}</p>

                  {release.items.length > 0 && (
                    <div className="mt-5">
                      {release.updates && <p className="mb-3 text-[0.72rem] font-extrabold tracking-[0.14em] text-[#b51f28] uppercase">{t("whatsNewUpdatesLabel")}</p>}
                      <ul className={`list-disc space-y-2 pl-5 text-left text-[0.86rem] leading-[1.6] marker:font-bold ${release.latest ? "text-white/85 marker:text-white" : "text-[#5f4b4a] marker:text-[#b51f28]"}`} aria-label={t(release.title)}>
                        {release.items.map((item) => (
                          <li key={item}>
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.latest && (
                    <Link href="/download" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-[13px] bg-white px-5 text-[0.9rem] font-bold text-[#b51f28] shadow-[0_8px_16px_rgba(61,31,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#fff4f2]">{t("whatsNewDownloadCta")} <span className="ml-2 text-lg" aria-hidden="true">↓</span></Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
