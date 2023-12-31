import React, { useState } from "react";
import BtnPrimary from "./BtnPrimary";

export default function Navbar() {
  const [btnActivation, sebtnActivation] = useState(true);

  const Menu = () => {
    sebtnActivation(!btnActivation);
  };

  return (
    <nav className="flex justify-center items-center  justify-between px-[20px] md:justify-evenly mt-10 w-[100%]">
      <img src="" alt="Logo" />
      <ul className="hidden md:flex gap-14">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Princing</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contac</a>
        </li>
      </ul>

      <BtnPrimary inf="Get Started" sty="hidden md:flex" />
      <button
        title="Add New"
        class="group cursor-pointer outline-none hover:rotate-90 duration-300 md:hidden"
        onClick={Menu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          class="stroke-primary fill-none group-hover:fill-white group-active:stroke-black group-active:fill-primary group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke-width="1.5"
          ></path>
          <path d="M8 12H16" stroke-width="1.5"></path>
          <path d="M12 16V8" stroke-width="1.5"></path>
        </svg>
      </button>

      <div className="absolute top-28 flex flex-col items-center left-0 z-50 bg-red-700 w-[100%] h-[100%]">
        <ul className="flex flex-col mt-28 text-[28px] text-white gap-14">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Princing</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contac</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
