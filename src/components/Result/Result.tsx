import React from 'react'
import RulesButton from '../RulesButton/RulesButton'
import { ResultProps } from './Result.props'


const Result = ({setYourVariant,setCompterVariant}:ResultProps) => {

    const clearValue = ()=> {
        setYourVariant('')
        setCompterVariant('')
    }
  return (
    <div className='flex flex-col gap-8 justify-center items-center mt-[-100px] '>
        <RulesButton onClick={clearValue} types="again">
            PLAY AGAIN
        </RulesButton>
    </div>
  )
}

export default Result