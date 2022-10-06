import React, {useState} from 'react'

function Hooks() {

  const [name,setName]=useState({firstname:'',lastname:''})
  return (
    <div>
        <input type="text" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}></input>
        <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}></input>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}
 
export default Hooks