import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import PriceComponent from "./components/PriceComponent";
import FaqComponent from "./components/FaqComponent";
import FundingBenefits from "./components/FundingBenefits";
import TradePotential from "./components/TradePotential";
import Coverflow from "./components/Coverflow";
import MobileGetInTouch from "./components/MobileGetInTouch";
import { useThemeContext } from '../context/ThemeContext';
import IndexPage from "./components/IndexPage";
import Script from 'next/script';
import Head from 'next/head';
export default function Home() {
  

  const { theme } = useThemeContext();
  return (
    <main>
      <IndexPage>
          <title>NextLevelFunding - Get funded up to £1,000,000 with up to a 90% profit split.</title>
          <meta
            name="description"
            content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
      <Hero/>
      <div className={`${theme === "light" ? 'home-bg text-white' : 'bg-white text-black'}   xl:px-[9rem] 2xl:px-[12rem] px-[2rem]`}>
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



