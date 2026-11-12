"use client";

import Copyright from "./copyright";
import LegalInformation from "./information";

export default function FooterContent() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Copyright />
        <LegalInformation />
      </div>
    </footer>
  );
}
