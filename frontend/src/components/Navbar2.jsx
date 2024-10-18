import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";

const Navbar2 = (props) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <>
      <div
        className={`${
          showMenu
            ? "fixed h-screen w-full bg-white z-20 top-0 left-0"
            : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6 w-full">
          <img className="w-36" src={assets.logo} alt="" />
          <img
            className="w-7"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium  w-screen">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded inline-block">HOME</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/places">
            <p className="px-4 py-2 rounded inline-block">TO PLACES</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <p className="px-4 py-2 rounded inline-block">ABOUT</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <p className="px-4 py-2 rounded inline-block">VOLUNTEER</p>
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center justify-between text-sm py-2 px-5 fixed top-3 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-400 shadow-lg rounded-full mb-5 border-b border-b-gray-400 z-20">
        <img
          onClick={() => navigate("/")}
          className="w-44 cursor-pointer"
          src={""}
          alt=""
        />
        <ul className="hidden md:flex items-start gap-6 font-medium">
          <NavLink to="/">
            <li className="py-1 hover:text-gray-300">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/places">
            <li className="py-1 hover:text-gray-300">PLACES</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/report">
            <li className="py-1 hover:text-gray-300">REPORT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/cases">
            <li className="py-1 hover:text-gray-300">CASES</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1 hover:text-gray-300">VOLUNTEER</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          <CgDarkMode
            className="w-7 h-7 cursor-pointer hover:text-gray-300"
            onClick={props.toggleDarkMode}
          />
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full border-2 border-white"
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-2 rounded-full font-light hidden md:block hover:bg-primary-50"
            >
              Create account
            </button>
          )}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden"
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>{" "}
    </>
  );
};

export default Navbar2;
