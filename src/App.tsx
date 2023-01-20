import { useEffect, useState } from 'react'
import Border from './components/Border/Border'
import Picked from './components/Picked/Picked'
import Result from './components/Result/Result'
import Rules from './components/Rules/Rules'
import RulesButton from './components/RulesButton/RulesButton'
import Triangle from './components/Triangle/Triangle'



function App() {
  const [open, setOpen] = useState(false)
  const [yourVariant, setYourVariant] = useState('')
  const [compterVariant, setCompterVariant] = useState('')
  const arr= ['rock', 'papper', 'scissor']

  const [data, setData] = useState({
    win:0,
    lose:0,
    draw:0
  })

  useEffect(()=> {  
      
      if(yourVariant.length && compterVariant.length) {
        if(yourVariant==compterVariant) {
          setData({...data, draw: data.draw+1})
        }
      }

      if(yourVariant=='rock' && compterVariant=='papper' || yourVariant=='papper' && compterVariant=='scissor') {
        setData({...data, lose: data.lose+1})
       }
    
       if(yourVariant=='rock' && compterVariant=='scissor' || yourVariant=='papper' && compterVariant=='rock') {
        setData({...data, win: data.win+1})
       }

       return ()=> {
        data
       }
  
  },[compterVariant.length,yourVariant.length])
 
  return (
    <div className="h-full max-w-[1280px] my-0  mx-auto px-[10px] "  >
     <div className='w-full flex justify-center flex-col items-center   gap-[100px]'>
        <Border {...data}/>
        {!yourVariant.length? <Triangle arr={arr} setYourVariant={setYourVariant}/> : <Picked yourVariant={yourVariant} setCompterVariant={setCompterVariant} compterVariant={compterVariant} arr={arr}/>}
        <RulesButton onClick={()=> setOpen(true)} types="rules" >
          RULES
        </RulesButton>
     </div>
      {open && <Rules open={open} setOpen={setOpen}/>}
     {compterVariant.length &&  <Result setYourVariant={setYourVariant} setCompterVariant={setCompterVariant}/>}
    </div>
  )
}

export default App
