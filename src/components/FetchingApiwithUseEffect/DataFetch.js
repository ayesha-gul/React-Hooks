import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min';

const DataFetch = () => {
    const[data,setData]=useState("myposts");

    

    useEffect(() => {
        getdata();
    })
  return (
    <div><button>click to get postsy</button>
    <h1>{data}</h1></div>
  )
}

export default DataFetch