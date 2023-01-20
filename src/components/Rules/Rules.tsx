import { motion } from 'framer-motion'
import React from 'react'
import closeIcon from '../../assets/icon-close.svg'
import imageRules from '../../assets/image-rules.svg'
import { RulesProps } from './Rules.props'


const Rules = ({open,setOpen}: RulesProps) => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className='w-full h-[100vh] absolute top-0 right-0 left-0 bottom-0  flex justify-center items-center z-[5155]'>
          <div className='w-[400px] h-[415px] bg-[#FFFFFF] opacity-100 shadow-[0_3px_3px_0_rgba(0,0,0,0.196706)] rounded-[8px] p-[32px] flex flex-col gap-[20px]'>
          <div className='flex justify-between items-center'>
              <p className='text-[32px] font-bold text-[#3B4262]'>Rules</p>
              <button onClick={()=> setOpen(false)}> <img src={closeIcon} alt="closeIcon" /> </button>
          </div>
              <img src={imageRules} alt="imageRules"  />
          </div>
          
      </motion.div>
      <div className='w-full h-[100vh] bg-black opacity-50 absolute top-0 right-0 left-0 bottom-0 '> </div>
    </>
   
  )
}

export default Rules