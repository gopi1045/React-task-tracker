import React,{useState,useEffect} from 'react'

function EffectHook2() {
const [count,setCount]=useState(0)
const [name,setName]=useState('')

useEffect(()=>{
   console.log("Updated") 
},[count])

    return (
    <div>
        <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(prevState=>prevState+1)}>count {count} times</button>
    </div>
  )
}

export default EffectHook2