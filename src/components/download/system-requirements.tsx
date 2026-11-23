"use client";

import { useLanguage } from "@/components/language-provider";

const requirements = [
  { label: "systemAndroidLabel", value: "systemAndroidValue", icon: "phone" },
  { label: "systemMemoryLabel", value: "systemMemoryValue", icon: "memory" },
  { label: "systemProcessorLabel", value: "systemProcessorValue", icon: "processor" },
  { label: "systemStorageLabel", value: "systemStorageValue", icon: "storage" },
] as const;

export default function SystemRequirements() {
  const { t } = useLanguage();

  return (
    <section className="mt-22 max-[620px]:mt-16" aria-labelledby="system-requirements-title">
      <div className="mb-8 max-w-3xl">
        <span className="inline-flex items-center gap-2 text-[0.75rem] font-extrabold tracking-[0.13em] text-[#b51f28] uppercase before:h-0.5 before:w-5 before:rounded-full before:bg-current before:content-['']">{t("systemRequirementsEyebrow")}</span>
        <h2 id="system-requirements-title" className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1] font-extrabold tracking-[-0.06em] text-[#3d1f20]">{t("systemRequirementsTitle")}</h2>
        <p className="mt-4 max-w-2xl text-[1rem] leading-[1.8] text-[#756766]">{t("systemRequirementsDescription")}</p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
        {requirements.map((requirement) => (
          <article key={requirement.label} className="rounded-[18px] border border-[#efd2d0] bg-[#fff8f7] p-5 shadow-[0_8px_18px_rgba(142,24,32,0.05)]">
            <span className="grid size-10 place-items-center rounded-[12px] bg-[#f6dedd] text-[#b51f28]" aria-hidden="true"><RequirementIcon name={requirement.icon} /></span>
            <p className="mt-5 text-[0.72rem] font-extrabold tracking-[0.12em] text-[#927c79] uppercase">{t(requirement.label)}</p>
            <p className="mt-2 text-[1.08rem] font-extrabold tracking-[-0.02em] text-[#3d1f20]">{t(requirement.value)}</p>
          </article>
        ))}
      </div>

      <p className="mt-5 text-[0.88rem] leading-[1.7] text-[#756766]">{t("systemHardwareNote")}</p>
    </section>
  );
}

function RequirementIcon({ name }: { name: (typeof requirements)[number]["icon"] }) {
  if (name === "phone") {
    return <svg className="size-5" viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  }
  if (name === "memory") {
    return <svg className="size-5" viewBox="0 0 24 24" fill="none"><rect x="5" y="7" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M8 4v3M12 4v3M16 4v3M8 17v3M12 17v3M16 17v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  }
  if (name === "processor") {
    return <svg className="size-5" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><path d="M9 1v4M12 1v4M15 1v4M9 19v4M12 19v4M15 19v4M1 9h4M1 12h4M1 15h4M19 9h4M19 12h4M19 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  }
  return <svg className="size-5" viewBox="0 0 24 24" fill="none"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" /><path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}
