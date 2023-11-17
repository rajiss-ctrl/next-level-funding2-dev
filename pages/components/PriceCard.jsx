import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../../context/ThemeContext";

const PriceCard = (props) => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <div
      className={`${theme === 'light' ? "text-white border-slate-500" : "text-black border-white"} price-card-morph text-center overflow-hidden w-full lg:h-[530px] py-4 px-3 ${props.className} ${
        props.value === "€600" || props.value === "€575" ? "bg-blue-500 text-white" : " bg-white bg-opacity-5"
      }`}
    >
    <div className="flex items-center justify-center col">
    <p
        className={`space-grotesk text-xl font-bold uppercase ${
          props.packageNum === "INSTANT FUNDING"
            ? "bg-white  text-center  text-blue-500 py-2 px-4 rounded-[50px]"
            : ""
        }`}
      >
        {props.packageNum}
      </p>
    </div>
      <p className="space-grotext text-center text-2xl font-bold uppercase">{props.packageNum !== "INSTANT FUNDING" ? "Evaluation" : "" }</p>
      <p className="lexend text-xm font-light mt-5">{props.valPrep}</p>
      <p className="text-5xl font-bold space-grotesk mt-5">{props.value}</p>

      <div className="grid text-start justify-center">
        <div className="">
          <span className="tooltip tooltip-up" data-tip={props.listOne}>
            <p className="bullet-point uppercase mt-2 text-sm cursor-pointer">
              {props.listOne}
            </p>
          </span>
        </div>
        <div>
          <span className="tooltip  tooltip-up" data-tip={props.listTwo}>
            <p className="bullet-point  uppercase mt-2 text-sm">
              {props.listTwo}
            </p>
          </span>
        </div>
        <div>
          <span
            className="tooltip tooltip-up  justify-center"
            data-tip={props.listThree}
          >
            <p className={` bullet-point uppercase mt-2 text-sm`}>
              {props.listThree}
            </p>
          </span>
        </div>
        <div>
          <span
            className="tooltip tooltip-up  justify-center"
            data-tip={props.listFour}
          >
            <p className="bullet-point uppercase mt-2 text-sm">
              {props.listFour}
            </p>
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button
          className="backdrop-filter text-white bg-[#991275] border-none mt-3"
          text="pay now"
          onClick={() => router.push(props.link)}
        />
      </div>
      <p className={`${theme === 'light' ? "text-white" : "text-black"}  
      ${props.value === "€600" || props.value === "€575" ? " text-white" : " text-black"} 
      w-[84%] text-center m-auto mt-5`}>
        Please check{" "}
        <span
          className={`text-yellow-400 underline ${props.spanClassName} ${
            props.value === "€600" || props.value === "€575" ? "text-white" : ""
          }`}
        >
          <Link href="/trading-rules">Trading Rules</Link>
        </span>{" "}
        page for more info 
      </p>
    </div>
  );
};

export default PriceCard;
