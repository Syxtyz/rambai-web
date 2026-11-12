"use client";

import Copyright from "./copyright";
import LegalInformation from "./information";

export default function FooterContent() {
  return (
    <footer className="border-t border-[#eadbd8] bg-[#fffdfc]/75">
      <div className="mx-auto flex min-h-23.25 w-[min(1120px,calc(100%-48px))] items-center justify-between gap-5 text-[0.8rem] text-[#756766] max-[620px]:min-h-28 max-[620px]:flex-col max-[620px]:items-start max-[620px]:justify-center max-[620px]:gap-3 max-[620px]:py-5">
        <Copyright />
        <LegalInformation />
      </div>
    </footer>
  );
}
