import React from "react";
import Button from "./Button";
import { useThemeContext } from "../context/ThemeContext";
const CarouselCard = (props) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className= {`${theme === "light" ? "text-white border border-slate-800 bg-opacity-5" :
     "text-black border border-white bg-opacity-5"} backdrop backdrop-blur-lg  shadow-lg rounded-xl py-24 2xl:px-5 px-6  w-full h-full`}>
      {props.img && (
        <img src={props.img} className="w-10 h-auto"/>
      )}
      <p className={`lexend font-bold pt-4 pb-7 text-2xl`}>{props.title}</p>
      <p className="lexend text-xlfont-thin">{props.text}</p>
      <div className="absolute 2xl:-right-20 pt-10 pb-5">
        <Button
          className="bg-[#3658C1] border-none  px-3 text-[12px] lexend"
          text="get funded"
          showArrow={false}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
