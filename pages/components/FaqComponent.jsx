import React from "react";
import AccordionComponent from "./AccordionComponent";
import { accordionContents } from "@/lib/data";
import { useTheme } from "../../context/ThemeContext";
import IndexPage from "./IndexPage";

const FaqComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full">
      <IndexPage>
          <title>Next Level Funding FAQ - Your Financial Queries Answered </title>
          <meta name="keywords" content="Contact Next Level Funding, financial solutions, discuss finance, business financial future, personalized funding, contact us"/>

          <meta
            name="description"
            content="Explore our comprehensive FAQ section at Next Level Funding. Get answers to your financial questions and discover how we can elevate your financial journey."
          />
          <meta property="og:title" content="NextLevelFunding" />
          {/* Add other meta tags as needed for og:description, og:image, etc. */}
          <link rel="favicon" sizes="180x180" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
          <link rel="favicon" type="image/ico" sizes="16x16" href="/assets/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
        
      </IndexPage>
      <section className="pt-[4rem] w-full" id="faq">
        <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
          To explore common issues
        </p>
        <p className={`${theme === 'light' ? "text-white" : "text-black"} font-bold space-grotesk 2xl:text-6xl text-3xl lg:text-[3rem] text-center mt-3 px-3`}>
          Frequently asked questions
        </p>
        <div className="px-0">
          {accordionContents.map((content, index) => (
            <div key={index}>
              <AccordionComponent header={content.title} text={content.text} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqComponent;
