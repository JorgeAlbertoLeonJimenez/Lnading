import React from 'react'

export default function Text2({icon , title , description}) {
  return (
    <div className= ' md:w-[615px] h-[150px] flex items-center' >
        <img src={icon} alt="icon" />
        <div className='flex flex-col justify-between w-[535px] h-[105px] ml-5'>
            <h4 className='font-bold my-[10px]  text-[24px]'>{title}</h4>
            <p className=' w-[100%] '>{description}</p>
        </div>


    </div>
  )
}
