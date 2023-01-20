import { motion } from 'framer-motion'
import React from 'react'
import { RulesButtonProps } from './RulesButton.props'
import cn from 'classnames';


const RulesButton = ({children,types, className,...props } :RulesButtonProps) => {
  return (
    <motion.button 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className={cn( className, {
      ['flex self-end w-[128px] h-[40px] border-[#FFFFFF] border-2 text-[16px] font-semibold  justify-center items-center text-white rounded-md  hover:bg-white hover:text-black hover:duration-300 duration-300 mt-[-50px]']: types == 'rules',
      ['flex  w-[128px] h-[40px] border-[#FFFFFF] border-2 text-[16px] font-semibold  justify-center items-center text-white rounded-md  hover:bg-white hover:text-black hover:duration-300 duration-300  min-[300px]:mt-[-100px] min-[500px]:mt-[-50px]']: types == 'again',
    })} 
    {...props} >
        {children}
    </motion.button>
  )
}

export default RulesButton