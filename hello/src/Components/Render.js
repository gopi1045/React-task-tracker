import React, { Component } from 'react'

class Render extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    render() {
    return this.state.isLoggedIn?(
        <div>
            Welcome to India
        </div>
    ):(
        <div>
            Welcome to Guest
        </div>
    )
  }
}

export default Render