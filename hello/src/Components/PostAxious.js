import React, { Component } from 'react'
import axios from 'axios'
export class PostAxious extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       UserId:'',
       Title:'',
       Body:''
    }
  }
  changeHandler=(event)=>
  {
    this.setState({
        [event.target.name]:event.target.value
    })
  }
  postHandler=(event)=>{
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
    event.preventDefault();
  }
    render() {
        const {UserId,Title,Body}=this.state
    return (
      
      <form onSubmit={this.postHandler}>
        <div>
            <input type="text" name="UserId" value={UserId} onChange={this.changeHandler}></input>
        </div>
        <div>
            <input type="text" name="Title" value={Title} onChange={this.changeHandler}></input>
        </div>
        <div>
            <input type="text" name="Body" value={Body} onChange={this.changeHandler}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default PostAxious