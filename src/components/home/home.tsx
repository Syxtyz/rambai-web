import HomeFeatures from "./features";
import HomeHero from "./hero";

export default function HomeContent() {
  return (
    <div className="py-13 pb-23.5 max-[620px]:pt-11">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] max-[620px]:w-[min(100%-34px,480px)]">
        <HomeHero />
        <HomeFeatures />
      </div>
    </div>
  );
}
