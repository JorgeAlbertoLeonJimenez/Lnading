import React from 'react'
import BtnPrimary from './BtnPrimary'
import check from "../icons/logos/chec.svg"

export default function Princing({type , price , men , men2 ,men3 , men4}) {
    return (
        <div className='w-[350px] md:w-[235px] lg:w-[325px] h-[449px] bg-primary text-white rounded-3xl flex flex-col justify-around py-[40px] px-[30px]'>
            <h5 className='text-[28px]'>{type}</h5>
            <p className='text-[24px]'>${price}/Mont</p>
            <ul className='flex flex-col gap-3.5 text-[18px]'>
                <li className='flex'>
                    <img src={check} alt="check" />
                    <a href="" className='ml-[10px]'>{men}</a>
                </li>
                <li className='flex'>
                    <img src={check} alt="check" />
                    <a href=""  className='ml-[10px]'>{men2}</a>
                </li>
                <li className='flex'>
                    <img src={check} alt="check" />
                    <a href=""  className='ml-[10px]'>{men3}</a>
                </li>
                <li className='flex'>
                    <img src={check} alt="check" />
                    <a href=""  className='ml-[10px]'>{men4}</a>
                </li>

            </ul>
            <BtnPrimary inf="Browse Proudcs" sty="sm:text-black bg-white px-[30px]" />


        </div>
    )
}
