"use client";

import { useLanguage } from "@/components/language-provider";

export default function HomeFeatures() {
  const { t } = useLanguage();

  return (
    <section className="mt-7 grid grid-cols-3 gap-[14px] max-[620px]:grid-cols-1" aria-label="RambAI features">
      <Feature icon="⌕" title={t("featureScan")} copy={t("featureScanCopy")} />
      <Feature icon="▤" title={t("featureResults")} copy={t("featureResultsCopy")} />
      <Feature icon="✿" title={t("featureGrowers")} copy={t("featureGrowersCopy")} />
    </section>
  );
}

function Feature({ icon, title, copy }: { icon: string; title: string; copy: string }) {
  return (
    <article className="flex min-h-[110px] items-center gap-[14px] rounded-[18px] border border-[#eadbd8]/80 bg-[#fffdfc]/75 p-5 max-[620px]:min-h-[90px]">
      <span className="grid size-[42px] shrink-0 place-items-center rounded-[13px] bg-[#f6dedd] text-[1.05rem] text-[#b51f28]" aria-hidden="true">{icon}</span>
      <span>
        <strong className="block text-[0.86rem]">{title}</strong>
        <small className="mt-1 block text-[0.72rem] leading-[1.45] text-[#756766]">{copy}</small>
      </span>
    </article>
  );
}
