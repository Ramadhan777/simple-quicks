import React from "react";
import {useNavigate} from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/activity')} className="h-screen w-screen bg-[#0F8A69] flex items-center justify-center">
      <p className="w-[800px] text-white text-9xl font-bold text-center">Simple Quicks</p>
    </div>
  );
};

export default Homepage;
