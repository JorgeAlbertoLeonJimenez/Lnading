import React from 'react';

export default function BtnPrimary({ sty , inf}) {
  return (
    <button className={`${sty} bg-primary  py-[16px] px-[20px] rounded-tl-[30px] rounded-tr-[100px] rounded-br-[30px] rounded-bl-[100px]  text-white`}>
      {inf}
    </button>
  );
}
