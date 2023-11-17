import React from "react";
import GlassMorphCard from "./GlassMorphCard";
import Button from "./Button";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";

const FundingBenefits = () => {
  const { theme} = useTheme();

  return (
    <div className="pt-[8rem] lg:pb-[4rem]">
      <p className="lexend uppercase text-slate-400 text-sm text-center 2xl:text-left">
        TURNING TRADERS INTO CHAMPIONS – LET US INVEST IN YOUR SUCCESS.
      </p>
      <p className={`${theme === "light" ? "text-white" : "text-black"} font-bold space-grotesk 2xl:text-6xl text-3xl mt-3 text-center 2xl:text-left`}>
        Next Level Funding Benefits
      </p>
      <div className="grid lg:grid-cols-3 my-10 gap-10 lg:px-0">
        <GlassMorphCard
          img="/assets/Time-illustration.png"
          title="No Time Limits"
          text={`We do not have a certain amount of time limit for you to pass your one step evaluation. You have unlimited time to complete the phase and can trade without the stress of having to reach a target in a set amount of time.`}
          className="text-3xl"
        />
        <GlassMorphCard
          img="/assets/Computer-illustration.png"
          title="Lowest targets"
          text={`With our one step evaluation being only a 12% profit target we have one of the most competitive targets across all funding companies.`}
          className="text-3xl"
        />{" "}
        <GlassMorphCard
          img="/assets/iphone-illustration.png"
          title="Money back"
          text={`Get your money you paid for your evaluation account back once you reach your first profit split on your live account providing you did not pass with a HFT algorithm.`}
          className="text-3xl"
        />
      </div>
      <div className="w-full">
        <Link href="/about-us">
          <Button
            className={`${theme === 'light' ? "text-white border border-slate-500" : "text-black border border-slate-800"} backdrop-filter bg-[transparent] hover:bg-blue-300 backdrop-blur-lg bg-opacity-30  m-auto`}
            text="learn more"
          />
        </Link>
      </div>
    </div>
  );
};

export default FundingBenefits;
