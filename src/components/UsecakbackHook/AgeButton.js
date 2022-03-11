import React from 'react'

const AgeButton = ({adding,children}) => {
    console.log("rendering button -", children)
  return (
    <div><button onClick={adding} >{children}</button></div>
  )
}

export default AgeButton