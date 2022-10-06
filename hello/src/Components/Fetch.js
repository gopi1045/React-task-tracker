import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Fetch() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idBtn,setIdBtn]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[idBtn])
    const handleClick=()=>{
        setIdBtn(id)
    }
  return (
    <div>
        {/* {
            posts.map(post=>(
                <h2 key={post.id}>{post.title}</h2>
            ))
        } */}
        <input type="text" name="id" value={id} onChange={(e)=>setId(e.target.value)}></input>
        <button type="button" onClick={handleClick}>Fetch Post</button>
        {post.title}
    </div>
  )
}

export default Fetch