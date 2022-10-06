import React from 'react'
import parent from './parent'
function child(props) {
  return (
    <div>
        <button onClick={()=>props.greet('child')}>Click</button>
    </div>
  )
}

export default child