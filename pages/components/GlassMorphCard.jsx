import React from "react";
import StarIcon from '@mui/icons-material/Star';



const GlassMorphCard = (props) => {
  return (
    <div className="h-[330px] mb-10 bg-white backdrop backdrop-blur-lg bg-opacity-5 text-white border border-slate-700 shadow-lg rounded-xl py-8 2xl:px-5 px-3">
      {props.img && (
        <img src={props.img} className="w-32 h-auto " alt="illus-time" />
      )}
      <p className={`lexend font-bold py-4  ${props.className}`}>
        {props.title}
      </p>
      <p className="flex">  
        <span className="h-4 flex justify-center items-center bg-green-500 mr-1"><StarIcon className="w-[15px] h-[15px]" /></span>
        <span className="h-4 flex justify-center items-center bg-green-500 mr-1"><StarIcon className="w-[15px] h-[15px]" /></span>
        <span className="h-4 flex justify-center items-center bg-green-500 mr-1"><StarIcon className="w-[15px] h-[15px]" /></span>
        <span className="h-4 flex justify-center items-center bg-green-500 mr-1"><StarIcon className="w-[15px] h-[15px]" /></span>
        <span className="h-4 flex justify-center items-center bg-green-500 mr-1"><StarIcon className="w-[15px] h-[15px]" /></span>
      </p>
      <p className="lexend text-sm font-thin">{props.text}</p>
      <p className="lexend text-sm font-bold pt-6">{props.name}</p>
    </div>
  );
};

export default GlassMorphCard;
