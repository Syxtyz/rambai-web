import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/navigation/navigation";
import FooterContent from "@/components/footer/main";
import { LanguageProvider } from "@/components/language-provider";

export const metadata: Metadata = {
  title: "RambAI | Rambutan grading",
  description: "Scan rambutan batches and review their quality with RambAI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(ellipse_at_88%_7%,rgba(181,31,40,0.07),transparent_28rem),#f7edeb] font-sans text-[#29201f] antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <NavigationBar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <FooterContent />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
