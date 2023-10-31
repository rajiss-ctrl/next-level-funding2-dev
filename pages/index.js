import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import PriceComponent from "./components/PriceComponent";
import FaqComponent from "./components/FaqComponent";
import FundingBenefits from "./components/FundingBenefits";
import TradePotential from "./components/TradePotential";
import Coverflow from "./components/Coverflow";
import MobileGetInTouch from "./components/MobileGetInTouch";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <div className="home-bg text-white xl:px-[9rem] 2xl:px-[12rem] px-[2rem]">
        <TradePotential />
        <Coverflow />
        <FundingBenefits />
        <PriceComponent />
        <FaqComponent />
        <div className="hidden xl:block">
          <GetInTouch />
        </div>
        <div className="block xl:hidden">
          <MobileGetInTouch />
        </div>
        <Footer />
      </div>
    </main>
  );
}
