import { motion } from 'framer-motion'
import React from 'react'
import Counter from '../Counter/Counter'
import { BorderProps } from './Border.props'



const Border = (data:BorderProps) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className='md:w-[700px] min-[318px]:w-full  h-[150px] border-2 border-solid border-[rgba(255, 255, 255, 0.289199)] p-[12px] flex min-[500px]:justify-between  min-[300px]:justify-center  rounded-[15px]'>
       <h1 className='min-[500px]:block  min-[300px]:hidden text-[36px]    w-[155px] leading-none text-white  font-bold '>ROCK PAPER SCISSORS</h1> 
       <Counter {...data}/>
    </motion.div>
  )
}

export default Border