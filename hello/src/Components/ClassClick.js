import React, { Component } from 'react'

export class ClassClick extends Component {
  message()
  {
    console.log("Welcome")
  }
  render() {
    return (
      <div>
        <button type="submit" onClick={this.message}>Click</button>
      </div>
    )
  }
}

export default ClassClick