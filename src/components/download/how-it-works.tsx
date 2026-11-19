"use client";

import { Fragment } from "react";
import { useLanguage } from "@/components/language-provider";

type StepIconName = "camera" | "scan" | "clipboard";

export default function HowItWorks() {
  const { t } = useLanguage();
  const steps = [
    { number: "1", icon: "camera" as const, title: t("howStepOneTitle"), copy: t("howStepOneCopy") },
    { number: "2", icon: "scan" as const, title: t("howStepTwoTitle"), copy: t("howStepTwoCopy") },
    { number: "3", icon: "clipboard" as const, title: t("howStepThreeTitle"), copy: t("howStepThreeCopy") },
  ];

  return (
    <section className="mt-22 max-[620px]:mt-16 gap-8 flex flex-col" aria-labelledby="how-it-works-title">
      <h2 id="how-it-works-title" className="mb-4 text-4xl font-extrabold tracking-tight text-[#3d1f20]">{t("howItWorks")}</h2>
      <div className="flex flex-row items-stretch gap-8 max-[900px]:flex-col max-[900px]:gap-3.5">
        {steps.map((step, index) => (
          <Fragment key={step.number}>
            <Step {...step} />
            {index < steps.length - 1 && (
              <span className="flex shrink-0 items-center px-0.5 text-3xl font-light text-[#b51f28] max-[900px]:justify-center max-[900px]:rotate-90" aria-hidden="true">→</span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function Step({ number, icon, title, copy }: { number: string; icon: StepIconName; title: string; copy: string }) {
  return (
    <article className="flex min-h-[132px] min-w-0 flex-1 items-start gap-4 rounded-[18px] border border-[#efd2d0] bg-[linear-gradient(135deg,#fff9f8,#f9e9e7)] p-5 shadow-[0_8px_18px_rgba(142,24,32,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(142,24,32,0.13)] max-[900px]:w-full">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#b51f28] text-lg font-bold text-white shadow-[0_4px_8px_rgba(142,24,32,0.2)]">{number}</span>
      <span className="min-w-0">
        <span className="flex items-center gap-2.5">
          <StepIcon name={icon} />
          <strong className="text-[0.95rem] font-bold text-[#3d1f20]">{title}</strong>
        </span>
        <span className="mt-2 block text-[0.79rem] leading-[1.55] text-[#765b5a]">{copy}</span>
      </span>
    </article>
  );
}

function StepIcon({ name }: { name: StepIconName }) {
  if (name === "camera") {
    return (
      <svg className="size-7 shrink-0 text-[#b51f28]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 11h4l2-3h8l2 3h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="16" cy="18" r="5" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }

  if (name === "scan") {
    return (
      <svg className="size-7 shrink-0 text-[#b51f28]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M12 5H7a2 2 0 0 0-2 2v5M20 5h5a2 2 0 0 1 2 2v5M12 27H7a2 2 0 0 1-2-2v-5M20 27h5a2 2 0 0 0 2-2v-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }

  return (
    <svg className="size-7 shrink-0 text-[#b51f28]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="5" width="18" height="23" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 5.5V4a2 2 0 0 1 4 0v1.5M11 14h10M11 19h7M11 23h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m21 18 1.8 1.8L26 16.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
