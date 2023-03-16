import React from "react";
import loading from "../assets/images/loading.svg";

const Loading = ({desc}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full '>
      <img src={loading} alt="loading" className="animate-spin h-[60px]" />
      <div className="text-sm">{desc}</div>
    </div>
  );
};

export default Loading;
