import React from "react";
import BtnPrimary from "./BtnPrimary";

export default function CardsNews({inv}) {
  return (
    <div className={`${inv} w-[326px] h-[583px] flex flex-col gap-[20px] p-[20px] justify-between `}>
      <div className="w-[286px] h-[266px] bg-hero-pattern bg-center rounded-3xl"></div>
      <div>
        <p className="text-primary">New</p>
        <h5 className="text-[24px] font-bold">
          Unleash the Power of Adavance Analitics
        </h5>
        <p className="text-gray-500">
          losad cxxcasdfkbe xicjiwehfwelsxp;as hldfhsnczioxce
        </p>
      </div>
      <div className="flex justify-around">
        <p>2 Minutos Ago</p>
        <BtnPrimary inf="Read Now ->" />
      </div>
    </div>
  );
}
