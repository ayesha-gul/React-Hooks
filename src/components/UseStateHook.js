import React from 'react'
import { useState } from 'react'

const UsingStateHook = () => {
   const[val,setVal]=useState(0);

  return (
    <div>UsingStateHook initial value {val}
  
  {/* useState is used instead of a simple variable
   because when state is updated, our component 
   re-renders, usually to display that updated value. */}

     <br /> <button onClick={() => setVal(val + 1)}>Increment</button>
    </div>
  )
}

export default UsingStateHook