import React from 'react'
import { useState } from 'react'

const USingCallBackHook = () => {
   const[val,setVal]= useState({num1:0, num2 : 0})
  return (
    <div> <h3>Result = {num1}</h3>
        num1 : 
        <input type="number" />
        <br />
        num2 : 
        <input type="number" />
        <br />
        
    </div>
  )
}

export default USingCallBackHook