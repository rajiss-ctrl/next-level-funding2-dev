import React from "react";
import AccordionComponent from "./AccordionComponent";
import { accordionContents } from "@/lib/data";
import { useThemeContext } from "../context/ThemeContext";

const FaqComponent = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className="w-full">
      <section className="pt-[4rem]" w-full id="faq">
        <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
          To explore common issues
        </p>
        <p className={`${theme === 'light' ? "text-white" : "text-black"} font-bold space-grotesk 2xl:text-6xl  text-3xl lg:text-[3rem] text-center mt-3 px-`}>
          Frequently asked questions
        </p>
        <div className="w-full px-0">
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
