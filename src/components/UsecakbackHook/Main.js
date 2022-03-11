import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import AgeButton from './AgeButton'
import Count from './Count'
import Title from './Title'

const Main = () => {
    const[age,setAge]=useState(20);
    const[salary,setSal]=useState(1000);

    // useCallback is a hook that we use to help with our app's performance.
     const IncrementAge = useCallback( () =>  {
        setAge(age + 1)

    },[])

    const IncrementSal = useCallback(  ()=> {
        setSal(salary + 1000)

    },[]) 
  return (
    <div> 
         <Title />
        <Count text="Age" count={age} />
        <AgeButton adding={IncrementAge}  >Increment Age</AgeButton>
        <Count text="Salary" count={salary} /> 
        <AgeButton adding={IncrementSal} >Increment Salary</AgeButton>
    </div>
  )
}

export default Main