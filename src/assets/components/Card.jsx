import React from 'react'

export default function Card({log , title , description}) {
  return (
    <div className='w-[90%] md:w-[313px] h-[212px] mb-[30px] flex flex-col  justify-center justify-between'>
        <img className='w-[65px]' src={log} alt="Icon" />
        <p className='text-[24px] font-bold'>{title}</p>
        <p>{description}</p>
    </div>
  )
}
