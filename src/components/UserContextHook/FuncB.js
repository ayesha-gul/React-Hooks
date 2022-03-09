import React from 'react'
import { useContext } from 'react'
import FuncC from './FuncC'
import { Fn,La } from './ContextApi'

const FuncB = () => {
//  const myContext = useContext();

  return (
    <div>FuncB 

        <FuncC />
    </div>
  )
}

export default FuncB