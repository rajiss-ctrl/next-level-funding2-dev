import React from "react";
import { useThemeContext } from "../context/ThemeContext";



const GlassMorphCard = (props) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className={`${theme === 'light' ? "text-white bg-white border border-slate-700" :
     "text-black bg-white border border-white"} min-h-[330px] w-[285px] lg:w-full 2xl:w-full  mb-10  backdrop backdrop-blur-lg bg-opacity-5   shadow-lg rounded-xl py-8 2xl:px-5 px-3`}>
      {props.img && (
        <img src={props.img} className="w-32 h-auto " alt="illus-time" />
      )}
      <p className={`lexend font-bold py-4  ${props.className}`}>
        {props.title}
      </p>
      <p >{props.stars}</p>
      <p className="lexend text-sm font-thin">{props.text}</p>
      <p className="lexend text-sm font-bold pt-6">{props.name}</p>
    </div>
  );
};

export default GlassMorphCard;
