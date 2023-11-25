import React from "react";
import PriceCard from "./PriceCard";
import { PriceLists, bluePriceList } from "@/lib/data";
import Button from "./Button";
import Link from "next/link";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useTheme } from "../../context/ThemeContext";
import { useRouter } from "next/navigation";

const PriceComponent = () => {
  const { theme } = useTheme();
  const router = useRouter()
  return (
    <div id="evaluation-package" className="relative">
      <section className="grid flex-col justify-center items-center pt-[7rem]">
        <p className={`lexend uppercase text-slate-400 text-center text-sm px-3`}>
          Tailored Solutions to Amplify Your Trading Success
        </p>
        <p className={`${theme === 'light' ? "text-white" : "text-black"} font-bold space-grotesk 2xl:text-6xl text-3xl text-center mt-3 px-3`}>
          Our Evaluation Packages
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">
          {PriceLists.map((pricelist, index) => (
            <div key={index} className=" ">
              <PriceCard
                packageNum={pricelist.pack}
                value={pricelist.value}
                valPrep={pricelist.valPrep}
                listOne={pricelist.listOne}
                listTwo={pricelist.listTwo}
                listThree={pricelist.listThree}
                listFour={pricelist.listFour}
                link={pricelist.link}
                highlight={false}
              />
            </div>
          ))}
        </div>
        <div className="md:flex justify-center gap-8">
          {bluePriceList.map((list, index) => (
            <div key={index} className="mt-10">
              <PriceCard
                packageNum={list.pack}
                value={list.value}
                valPrep={list.valPrep}
                listOne={list.listOne}
                listTwo={list.listTwo}
                listThree={list.listThree}
                listFour={list.listFour}
                link={list.link}
                highlight={true}
              />
            </div>
          ))}
        </div>
        <div className=" px-10 md:px-6 pt-10 ">
        
        <p className={`text-center text-sm  ${theme === 'light' ? "text-white" : "text-slate-400"} `}><WarningAmberIcon/> <span className=""> Disclaimer: </span> 
        <span className="animated-text ">Our dashboard is getting a makeover and will be back for login on January 1st. In the meantime, trade and withdraw as usual via email. Apologies for any inconvenience!</span></p>
      </div>
        <div className="2xl:flex block justify-center my-8">
          
            <Button
             onClick={() => router.push('/trading-rules')}
            className={`${theme === 'light' ? "border border-slate-500" : "text-black border border-[1pxl solid black] font-bpld"} backdrop-filter  bg-[transparent] backdrop-blur-lg bg-opacity-30  mx-auto`}
              text="read trading rules"
            />
          
        </div>
      </section>

    </div>
  );
};

export default PriceComponent;
