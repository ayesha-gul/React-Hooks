import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const UsingrefHook = () => {
    const[val,setVal]=useState(0)
    
    //  useref doest not re-render the element,it returns object and it conatins current(argument) value,it holds the refernce of elemnet
    const input1= useRef();
    const input2 = useRef();

    const getNum = () => {
        console.log("hello")
        console.log(input1.current)
        input1.current.style.width = "400px";
        
    }
    const getText = () => {
        console.log("world")
        console.log(input2.current)
    }

  return (
    <div>
        input no:
        <input type='number'  ref={input1} style={{width:"100px"}}
        value={setVal} onChange={(e) => setVal(e.target.value)} /> <br />

        input text:
        <input type='text' ref={input2}
        value={setVal} onChange={(e) => setVal(e.target.value)} />
        <h3>value is : {val}</h3>
        <button onClick={() => getNum()}>Rurees</button>
        <button onClick={() => getText()}>Dollars</button>



    </div>
  )
}

export default UsingrefHook