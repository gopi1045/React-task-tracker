import React, { Component } from 'react'
import axios from 'axios'
class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         errorMessage:''
      }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({data:response.data})
            console.log(response.data)
        })
        .catch(error=>{
            this.setState({errorMessage:"error retrieving data"})
            console.log(error)
        })
    }
  render() {
    const {data,errorMessage}=this.state
    const result=data.map(datum=>(
        <div key={datum.id}>{datum.title}</div>
    ))
    return (
      <div>
        {data.length ? result:null}
        {errorMessage? errorMessage:null}
      </div>
    )
  }
}

export default GetEx