"use client";

import Copyright from "./copyright";
import LegalInformation from "./information";

export default function FooterContent() {
  return (
    <footer className="border-t border-[#eadbd8] bg-[#fffdfc]/75">
      <div className="mx-auto flex min-h-[93px] w-[min(1120px,calc(100%-48px))] items-center justify-between gap-8 text-[0.8rem] text-[#756766] max-[620px]:w-[min(100%-34px,480px)] max-[620px]:min-h-0 max-[620px]:flex-col max-[620px]:items-stretch max-[620px]:gap-6 max-[620px]:py-6">
        <Copyright />
        <LegalInformation />
      </div>
    </footer>
  );
}
