'use client'
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import TradingViewWidget from "./TradingViewWidget";
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? 'dark  body-bg' : 'light bg-white'} relative lg:h-[670px] w-full px-4 lg:px-[12rem] pt-8`}>
      <Box sx={{ paddingTop: 15, flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <p className={`${theme === "light" ? 'text-blue-500' : 'text-[#991275]'} uppercase font-bold lexend text-lg text-center lg:text-left md:px-10 lg:px-0 my-2`}>
              Next level funding
            </p>
            <p className={`${theme === "light" ? 'text-white' : 'text-black'} space-grotesk font-bold text-[1.8rem] text-center lg:text-[3.5rem] xl:text-[2.9rem] lg:text-left md:leading-[65px] leading-[39px]`}>
              Collaborative Funding, Mutual Risk,{" "}
              <span className="text-blue-500">Your Expertise.</span>
            </p>
            <div className="md:w-[30rem] m-auto lg:ml-0">
              <p className={`${theme === "light" ? 'text-white' : 'text-black'} text-sm xl:text-lg tracking-wide md:text-left text-center font-light lexend 2xl:w-[35rem] mt-1 mb-4`}>
              Unlock your trading potential with our program, securing funding of up to £1,000,000 with a generous 90% profit split. Experience the advantages of partnering with our leading proprietary trading firm.
              </p>
            </div>

            {/* <div className="lg:flex gap-4 mt-7 grid justify-center lg:justify-start"> */}
      
              <Link href="/#evaluation-package" className="lg:flex gap-4 mt-7 grid justify-center lg:justify-start">
                <Button
                  className={`${theme === "light" ? 'text-white' : 'text-white font-bold'} backdrop-filter bg-[#991275] border-none  text-center pt-3`}
                  text="get started"
                  showArrow={true}
                />
              </Link>
            {/* </div> */}
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <div className="flex xl:justify-end justify-center relative">
              <div className={`${theme === "light" ? 'bg-white border border-slate-800' : 'bg-black border border-gray'} bouncing-image rounded-full h-20 w-20 px-2 backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5`}>
                {/* Replace <img> with <Image> */}
                <Image src="/assets/eth.png" alt="eth" width={80} height={80} className="bouncing-image" />
              </div>

              <div className={`${theme === "light" ? 'bg-white border border-slate-800' : 'bg-black border border-gray'} backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5 w-30 h-30 rounded-full absolute p-[5rem] left-[40%] bottom-[30%] hidden lg:block`}></div>
              <div className="relative z-30">
                {/* Replace <img> with <Image> */}
                <Image src="/assets/laptop.gif" alt="trade-computer" width={480} height={320} className="lg:w-[30rem] w-[20rem] h-auto" />
              </div>
              <div className={`${theme === "light" ? 'bg-white border border-slate-800' : 'bg-black border border-gray'} backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5 w-30 h-30 rounded-full absolute p-[5rem] left-[60%] bottom-[10%] hidden lg:block`}></div>
            </div>
          </Grid>
        </Grid>
        <Box sx={{ paddingTop: 10, paddingBottom: 10 }}></Box>
      </Box>
      <div className="w-full absolute bottom-[0] xl:bottom-[-1.2rem] lg:bottom-[-0.8rem] left-[0] flex flex-row overflow-hidden">
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default Hero;
