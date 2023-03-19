import React from "react";
import {useNavigate} from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/activity')} className="h-screen w-screen bg-[#0F8A69] flex items-center justify-center hover:cursor-pointer">
      <p className="w-full sm:w-[640px] lg:w-[800px] text-white text-7xl sm:text-9xl font-bold text-center">Simple Quicks</p>
    </div>
  );
};

export default Homepage;
