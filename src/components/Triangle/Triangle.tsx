import { motion } from 'framer-motion'
import triangleImg from '../../assets/bg-triangle.svg'
import Step from '../Step/Step'
import { TriangleProps } from './Triangle.props'



const Triangle = ({arr,setYourVariant}:TriangleProps) => {

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className='min-[500px]:w-[476px] min-[400px]:w-[400px] min-[300px]:w-[300px]  min-[500px]:h-[430px] min-[300px]:h-[390px] relative flex justify-center  items-center '>
        <img src={triangleImg} alt="triangleImg" className='w-[254px] h-[287px]'/>
        <Step color1={"papper"} color2={"papper"} onClick={()=> setYourVariant(arr[1])}/>
        <Step color1={"rock"} color2={"rock"}    onClick={()=> setYourVariant(arr[0])}/>
        <Step color1={"scissor"} color2={"scissor"}  onClick={()=> setYourVariant(arr[2])}/>
    </motion.div>
  )
}

export default Triangle