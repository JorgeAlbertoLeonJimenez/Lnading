import React, { useState } from "react";
import BtnPrimary from "./BtnPrimary";
import logo from "../icons/logos/MUAI.png";

export default function Navbar() {
  const [btnActivation, setBtnActivation] = useState(true);

  const Menu = () => {
    setBtnActivation(!btnActivation);
  };

  return (
    <nav className="flex justify-center items-center justify-between px-[20px] md:justify-evenly mt-10 w-[100%]">
      <img src={logo} alt="Logo" />
      <ul className="hidden md:flex gap-14">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <BtnPrimary inf="Get Started" sty="hidden md:flex" />
      
      <button
        title="Add New"
        className="group cursor-pointer outline-none hover:rotate-90 duration-300 md:hidden"
        onClick={Menu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="stroke-primary fill-none group-hover:fill-white group-active:stroke-black group-active:fill-primary group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path
            d="M8 12H16"
            strokeWidth="1.5"
          ></path>
          <path
            d="M12 16V8"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>

      {btnActivation && (
        <div className="md:hidden text-right py-[30px] px-[20px] absolute top-28 flex flex-col rounded-2xl right-0 z-50 bg-primary w-[200px] h-[300px]">
          <ul className="flex flex-col text-[28px] text-white gap-5">
            <li className="border rounded-2xl bg-white text-black text-center">
              <a href="/">Home</a>
            </li>
            <li className="border rounded-2xl bg-white text-black text-center">
              <a href="#price">Pricing</a>
            </li>
            <li className="border rounded-2xl bg-white text-black text-center">
              <a href="/">About</a>
            </li>
            <li className="border rounded-2xl bg-white text-black text-center">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
