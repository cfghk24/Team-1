import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-white rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <img className="w-36 h-auto mb-4" src={assets.logo_s} alt="SCPA Logo" />{" "}
        {/* Increased size */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-[#0088cc] font-semibold leading-tight md:leading-tight lg:leading-tight">
          Report an emergency case <br /> of animal abuse
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-[#0088cc] text-sm font-light">
          <p>
            If you have witnessed or are aware of any sick or abused animals
            that need <br className="hidden sm:block" />
            help, inform society about it.
          </p>
        </div>
        <button
          onClick={() => navigate("/report")}
          className="flex items-center gap-2 bg-[#0083cb] px-8 py-3 rounded-full text-porto-primary-dark-20 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Report case{" "}
          <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.abuse}
          alt="Animal Abuse"
        />
      </div>
    </div>
  );
};

export default Header;
