import NavigationHero from "./hero";
import NavigationBarContent from "./NavigationContent";

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#eadbd8]/80 bg-[#fffdfc]/90 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[84px] w-[min(1120px,calc(100%-48px))] items-center justify-between gap-7 max-[800px]:min-h-[76px] max-[620px]:min-h-[70px] max-[620px]:flex-wrap max-[620px]:gap-2.5 max-[620px]:py-2.5" aria-label="Main navigation">
        <NavigationHero />
        <NavigationBarContent />
      </nav>
    </header>
  );
}
