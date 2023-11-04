import React from "react";



const GlassMorphCard = (props) => {
  return (
    <div className="min-h-[330px] mb-10 bg-white backdrop backdrop-blur-lg bg-opacity-5 text-white border border-slate-700 shadow-lg rounded-xl py-8 2xl:px-5 px-3">
      {props.img && (
        <img src={props.img} className="w-32 h-auto " alt="illus-time" />
      )}
      <p className={`lexend font-bold py-4  ${props.className}`}>
        {props.title}
      </p>
      <p>{props.stars}</p>
      <p className="lexend text-sm font-thin">{props.text}</p>
      <p className="lexend text-sm font-bold pt-6">{props.name}</p>
    </div>
  );
};

export default GlassMorphCard;
