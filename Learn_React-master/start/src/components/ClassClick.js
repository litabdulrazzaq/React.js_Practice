import React, { Component } from 'react'

class ClassClick extends Component {

       clickHandling() {
        console.log("Clicked")
    }


  render() {
    return (
      <div>
      <button onClick={this.clickHandling}>Click The Button</button>
        
      </div>
    )
  }
}

export default ClassClick
