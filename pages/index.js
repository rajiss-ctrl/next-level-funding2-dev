import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import PriceComponent from "./components/PriceComponent";
import FaqComponent from "./components/FaqComponent";
import FundingBenefits from "./components/FundingBenefits";
import TradePotential from "./components/TradePotential";
import Coverflow from "./components/Coverflow";
import MobileGetInTouch from "./components/MobileGetInTouch";
import { useThemeContext } from './context/ThemeContext';
import IndexPage from "./components/IndexPage";

export default function Home() {
  

  const { theme } = useThemeContext();
  return (
    <main className=" h-full">
       <IndexPage>
      <title>NextLevelFunding - Get funded up to £1,000,000 with up to a 90% profit split.</title>
        <meta
          name="NextLevelFunding"
          content="With our program, you can get funded up to £1,000,000 with up to a 90% profit split. Unlock Your Trading Potential with Our Leading Proprietary Trading Firm."
        />
        <meta property="og:title" content='' />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C9HBH2F8Z5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C9HBH2F8Z5');
            `,
          }}
        />
      </IndexPage>
      <Hero theme={theme} />
      <div className={`${theme === "light" ? 'dark  home-bg text-white' : 'light'}   xl:px-[9rem] 2xl:px-[12rem] px-[2rem]`}>
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



