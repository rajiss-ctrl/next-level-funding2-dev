import React from "react";

const GlassMorphCard = (props) => {
  return (
    <div className="bg-white backdrop backdrop-blur-lg bg-opacity-5 text-white border border-slate-700 shadow-lg rounded-xl py-10 2xl:px-5 px-3">
      {props.img && (
        <img src={props.img} className="w-32 h-auto " alt="illus-time" />
      )}
      <p className={`lexend font-bold pt-4 pb-7 ${props.className}`}>
        {props.title}
      </p>
      <p className="lexend text-sm font-thin">{props.text}</p>
    </div>
  );
};

export default GlassMorphCard;
