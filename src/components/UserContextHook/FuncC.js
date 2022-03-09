import React from 'react'
import Context from './ContextApi'



const FuncC = () => {
  return (
    <div>
      <Context.Consumer >
         {
           (props) => {
             return<> 
             <p>
                function C directly return value using (UseContext) or ContextApi .. {props}
             </p></>
           }
         } 
      </Context.Consumer>
    </div>
  )
}

export default FuncC