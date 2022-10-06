import React from 'react'

function FunClick() {
   function greet()
   {
    console.log("Welcome")
   }
  return (
    <div>
        <button type="submit" onClick={greet}>Click</button>
    </div>
  )
}
export default FunClick;