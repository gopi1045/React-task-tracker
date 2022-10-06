import React,{useEffect,useState} from 'react'

function EffectHook() {
    const [count,setCount]=useState(0)
    useEffect(
        ()=>{document.title=`You clicked ${count} times`}
    )
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count {count} times</button>
    </div>
  )
}

export default EffectHook