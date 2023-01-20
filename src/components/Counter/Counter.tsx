import { motion } from 'framer-motion'
import React from 'react'
import { BorderProps } from '../Border/Border.props'


const Counter = (data:BorderProps) => {
  return (
    <div className='w-[250px] h-[114px] bg-[#F3F3F3] rounded-[8px] py-[15px] text-center'>
        <p className='text-[18px] mb-[10px] leading-none text-[#2a46c0]  font-semibold '>Your Score</p>
        <div className='flex justify-around'>
         <div>
          <p className='text-[18px] mb-[10px] leading-none text-[#2a46c0]  font-semibold '>Win</p>
          <p 
          className='text-[32px]  leading-none text-[#3b4363]  font-bold '>{data.win}</p>
         </div>
         <div>
          <p className='text-[18px] mb-[10px] leading-none text-[#2a46c0]  font-semibold '>Draw</p>
          <p 
          className='text-[32px]  leading-none text-[#3b4363]  font-bold '>{data.draw}</p>
         </div>
          <div>
            <p className='text-[18px] mb-[10px] leading-none text-[#2a46c0]  font-semibold '>Lose</p>
            <p 
            className='text-[32px]  leading-none text-[#3b4363]  font-bold '>{data.lose}</p>
          </div>
        </div>
    </div>
  )
}

export default Counter