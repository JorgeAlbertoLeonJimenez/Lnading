import React from "react";
import BtnPrimary from "./BtnPrimary";

export default function First() {
  return (
    <div className="w-[350px] md:w-[732px] lg:w-[1000px] mt-[100px] rounded-3xl text-white flex flex-col justify-center lg:justify-normal lg:items-center items-end h-[600px] lg:h-[915px] bg-hero-pattern bg-center bg-no-repeat">
      <div className=" flex flex-col lg:items-center text-center md:text-left lg:text-center w-[357px] lg:w-[800px] p-[10px] md:mr-[20px] lg:mr-0 ">
        <h3 className="text-[28px] md:text-[38px] lg:text-[48px] lg:pt-14">
          Simplify your work <br />
          with AI tool
        </h3>
        <p className="text-[14px] md:text-[18px] mt-10 ">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>
        <div className="mt-10  items-center md:items-start flex flex-col lg:flex-row gap-5">
          <BtnPrimary inf="Get Started Fee -->" />
          <BtnPrimary
            inf="Explore Future"
            sty="sm:px-[30px] sm:bg-black sm:border sm:text-primary sm:border-primary "
          />
        </div>
      </div>
    </div>
  );
}
