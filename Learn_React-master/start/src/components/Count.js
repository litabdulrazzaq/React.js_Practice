import React, { Component } from 'react'

class Count extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { 
        //     console.log("Callback Value ", this.state.count)
        // })

        this.setState( (PrevState,props) =>({count: PrevState.count +1}))
    }


  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Count
