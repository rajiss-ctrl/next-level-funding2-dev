import React from "react";
import AccordionComponent from "./AccordionComponent";
import { accordionContents } from "@/lib/data";

const FaqComponent = () => {
  return (
    <div>
      <section className="pt-[4rem]" id="faq">
        <p className="lexend uppercase text-slate-400 text-center text-sm px-3">
          To explore common issues
        </p>
        <p className="font-bold space-grotesk 2xl:text-6xl  text-3xl lg:text-[3rem] text-center mt-3 px-3">
          Frequently asked questions
        </p>
        <div className="2xl:px-[10rem]">
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
