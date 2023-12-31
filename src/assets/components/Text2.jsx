import React from 'react'

export default function Text2({icon , title , description}) {
  return (
    <div className='md:w-[615px] h-[105px] flex items-center' >
        <img src={icon} alt="icon" />
        <div className='flex flex-col justify-between w-[535px] h-[105px] ml-5'>
            <h4 className='font-bold  text-[24px]'>{title}</h4>
            <p className='sm:w-[500px]'>{description}</p>
        </div>


    </div>
  )
}
