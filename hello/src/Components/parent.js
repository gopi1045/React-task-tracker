import React, { Component } from 'react'
import child from './child'
export class parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Gopi"
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childname){
        alert(`Hello ${this.state.parentName} from ${childname}`)
      }
  render() {
    return (
      <div>
        <child greet={this.greetParent}/>
      </div>
    )
  }
  
}

export default parent