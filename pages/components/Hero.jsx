import React from "react";
import Button from "./Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
import TradingViewWidget from "./TradingViewWidget";
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className={`relative ${theme === "light" ? 'dark  body-bg' : 'light bg-white'} lg:h-[670px] w-full px-4  lg:px-10 pt-8`}>
      <Box sx={{ paddingTop: 15, flexGrow: 1 }}>
        <div className="grid grid-cols-12 gap-5 md:px-[3rem] xl:px-[6rem]">
          <div className={`col-span-12 md:col-span-6 lg:col-span-6`}>
            <p className={`${theme === "light" ? 'text-blue-500' : 'text-[#991275]'} uppercase font-bold lexend text-lg md:text-sm lg:text-lg text-center md:text-left  lg:px-0 my-2`}>
              Next level funding
            </p>
            <p className={`${theme === "light" ? 'text-white' : 'text-black'} space-grotesk font-bold text-[1.8rem] text-center lg:text-[2.8rem] xl:text-[3rem] md:text-left lg:leading-[56px] xl:leading-[65px] leading-[39px]`}>
              Collaborative Funding, Mutual Risk,{" "}
              <span className="text-blue-500">Your Expertise.</span>
            </p>
            <div className="md:w-[30rem] m-auto lg:ml-0">
              <p className={`${theme === "light" ? 'text-white' : 'text-black'} text-sm lg:text-[1rem] xl:text-lg tracking-wide md:text-left text-center font-light lexend 2xl:w-[35rem] mt-1 mb-4 md:pr-[8rem] lg:pr-0`}>
                Unlock your trading potential with our program, securing funding of up to £1,000,000 with a generous 90% profit split. Experience the advantages of partnering with our leading proprietary trading firm.
              </p>
            </div>

            <Link href="/#evaluation-package" className="lg:flex mt-6 grid justify-center md:justify-start">
              <Button
                className={`${theme === "light" ? 'text-white' : 'text-white font-bold'} lg:p-3 backdrop-filter bg-[#991275] border-none  text-center `}
                text="get started"
                showArrow={true}
              />
            </Link>
          </div>

          <div className={`col-span-12 md:col-span-6 lg:col-span-6 flex lg:justify-end xl:justify-end justify-center  relative`}>
            <div className={`${theme === "light" ? 'bg-white border border-slate-800' : 'bg-black border border-gray'} bouncing-image rounded-full h-20 w-20 xl:px-2 backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5`}>
              <Image src="/assets/eth.png" alt="eth" width={80} height={80} className="bouncing-image" />
            </div>

            <div className={`${theme === "light" ? 'bg-white border border-slate-800' : 'bg-black border border-gray'} backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5 w-30 h-30 rounded-full absolute p-[5rem] left-[40%] bottom-[30%] hidden lg:block`}></div>

            <div className="relative z-30">
              <Image src="/assets/laptop.gif" alt="trade-computer" width={480} height={320} className="lg:w-[30rem] w-[20rem] h-auto" />
            </div>

            <div className={`${theme === "light" ? 'bg-white border border-slate-800' : 'bg-black border border-gray'} backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5 w-30 h-30 rounded-full absolute p-[5rem] left-[60%] bottom-[10%] hidden lg:block`}></div>
          </div>
        </div>
        <Box sx={{ paddingTop: 10, paddingBottom: 10 }}></Box>
      </Box>
      <div className="w-full absolute bottom-[0] xl:bottom-[-1.2rem] lg:bottom-[0.3rem] left-[0] flex flex-row overflow-hidden">
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default Hero;
