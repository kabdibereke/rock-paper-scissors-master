import { motion } from 'framer-motion'
import React from 'react'
import rockIcon from '../../assets/icon-rock.svg'
import { StepProps } from './Step.props'
import cn from 'classnames';
import paperIcon from '../../assets/icon-paper.svg'
import scissorIcon from '../../assets/icon-scissors.svg'
const Step = ({color1,color2=null, className, ...props}:StepProps) => {
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className={cn('min-[500px]:w-[198px] min-[300px]:w-[130px] min-[500px]:h-[203px] min-[300px]:h-[133px]    shadow-[0_3px_3px_0_rgba(0,0,0,0.196706)] rounded-full bottom-0 cursor-pointer  duration-300', className, {
        ['bg-[#2A45C2]']: color1 == 'papper',
        ['bg-[#9D1634]']: color1 == 'rock',
        ['bg-[#C76C1B]']: color1 == 'scissor',
        ['absolute top-0 left-0 bg-[#2A45C2]']: color2 == 'papper',
        ['absolute bottom-0 bg-[#9D1634]']: color2 == 'rock',
        ['absolute top-0 right-0 bg-[#C76C1B]']: color2 == 'scissor',
    })} 
    {...props}
    >
        <div 
         className={cn('min-[500px]:w-[198px] min-[300px]:w-[130px] min-[500px]:h-[194px] min-[300px]:h-[127px]    rounded-full flex justify-center items-center', className, {
            ['bg-[#4664F4]']: color1 == 'papper',
            ['bg-[#c51c40]']: color1 == 'rock',
            ['bg-[#e4b73d]']: color1 == 'scissor',
        })}>
            <div className='min-[500px]:w-[152px] min-[300px]:w-[100px] min-[500px]:h-[152px] min-[300px]:h-[100px] bg-[#BABFD4]  rounded-full flex justify-center items-end'>
                <div className='min-[500px]:w-[152px] min-[300px]:w-[99px] min-[500px]:h-[144px]  min-[300px]:h-[95px] bg-[#e2dede]  rounded-full flex justify-center items-center'>
                    {color1=='papper' && <img src={paperIcon} alt="paper" className='min-[500px]:w-[73px] min-[300px]:w-[48px] min-[500px]:h-[86px] min-[300px]:h-[56px] ' />}
                    {color1=='scissor' && <img src={scissorIcon} alt="paper" className='min-[500px]:w-[73px] min-[300px]:w-[48px] min-[500px]:h-[86px] min-[300px]:h-[56px] ' />}
                    {color1=='rock' && <img src={rockIcon} alt="paper" className='min-[500px]:w-[73px] min-[300px]:w-[48px] min-[500px]:h-[86px] min-[300px]:h-[56px] ' />}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Step