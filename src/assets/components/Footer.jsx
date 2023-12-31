import React from "react";
import maps from "../icons/maps.svg";
import email from "../icons/email.svg";
import BtnPrimary from "./BtnPrimary";

export default function Footer() {
  return (
    <footer className="p-[50px] bg-neg text-white  flex flex-col items-center">
      <div className="pt-10 pr-10  pb-10 pl-14  mb-10 flex justify-center text-center">
        <div className="flex gap-5 flex-col  items-center">
          <p>MUIA</p>
          <ul className="flex-row  md:flex md:gap-5 ">
            <li className="mb-2.5">
              <a href="" >Home</a>
            </li>
            <li  className="mb-2.5">
              <a href="">Princing</a>
            </li>
            <li  className="mb-2.5">
              <a href="">About</a>
            </li>
            <li  className="mb-2.5">
              <a href="">Contac</a>
            </li>
          </ul>
          <BtnPrimary sty="md:hidden" inf="Get Started" />

          <div className="md:flex flex-row gap-5 ">
            <div className="flex mb-2.5">
              <img src={maps} className="mr-2" alt="maps" />
              Java, Indonesia
            </div>
            <div className="flex mb-2.5">
              <img src={email} className="mr-2" alt="maps" />
              Java, Indonesia
            </div>
            <div className="flex mb-2.5">
              <img src={email} className="mr-2" alt="maps" />
              Java, Indonesia
            </div>
          </div>
        </div>
      </div>
      <div className=" border hidden lg:h-[236px] h-[279px] max-w-5xl min-w-[600px] p-[55px] rounded-[60px] md:flex flex-col lg:items-stretch items-center lg:flex-row my-10 bg-slate-900 ">

        <div className="text-[28px] lg:w-[200px]  h-[126px] mb-[53px]  mr-14">
          Join to get free 
          updates every 
          week.
        </div>
        <form action="" method="post" className="relative flex items-center ">
          <input
            type="Email Address"
            placeholder="Email Address"
            name=""
            id=""
            className="w-[550px] h-[74px] pl-5 bg-neg px-7 py-2.5 rounded-tl-[30px] rounded-tr-[100px] rounded-br-[30px] rounded-bl-[100px] "
          />
          <BtnPrimary sty="absolute right-3  mr-2" inf="Subscribe" />
        </form>
      </div>
      <div className="text-center md:flex justify-around lg:w-[1100px] w-[100%]">
        <p className="mb-2.5">2023 MUIA</p>
        <p className="mb-2.5">All Rights Reservaed</p>
        <p className="mb-2.5">Privacy Policy I Terms Of Services</p>
      </div>
    </footer>
  );
}
