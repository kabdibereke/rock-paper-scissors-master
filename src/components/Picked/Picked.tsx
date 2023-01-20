import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import Step from '../Step/Step'
import { PickedProps } from './Picked.props'


const Picked = ({yourVariant,setCompterVariant,compterVariant,arr}: PickedProps) => {
  

  useEffect(()=> {
    setTimeout(()=> {
      const result = arr[Math.floor(Math.random() * arr.length)]
      setCompterVariant(result)
    },1000)
  },[])


  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className='h-[395px] min-[660px]:w-[627px] min-[500px]:w-[500px] relative flex  justify-between  items-start min-[660px]:gap-0 min-[300px]:gap-[20px] '>
        <div className='flex flex-col justify-center items-center gap-[50px]'>
            <p className='text-center font-bold text-white min-[660px]:text-[32px] min-[400px]:text-[24px] '>YOU PICKED</p>
            {yourVariant=='papper' && <Step color1={"papper"}/>}
            {yourVariant=='rock' && <Step color1={"rock"}/>}
            {yourVariant=='scissor' && <Step color1={"scissor"}/>}
        </div>
        <div className='flex flex-col justify-center gap-[50px] items-center'>
            <p className='text-center font-bold text-white min-[660px]:text-[32px] min-[400px]:text-[24px]'>THE HOUSE PICKED</p>
            {compterVariant=='papper' && <Step color1={"papper"}/>}
            {compterVariant=='rock' &&  <Step color1={"rock"}/>}
            {compterVariant=='scissor' && <Step color1={"scissor"}/>}
        </div>
       
    </motion.div>
  )
}

export default Picked