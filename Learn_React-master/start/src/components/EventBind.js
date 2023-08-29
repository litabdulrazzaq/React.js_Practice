import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //    this.clickHandling = this.clickHandling.bind(this) third
    }
    

    // clickHandling(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    // }

    // fourth

    clickHandling = () =>{
        this.setState({
            message:'Good Bye!'
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandling.bind(this)}>Click</button>  first */}
        {/* <button onClick={()=>this.clickHandling()}>Click</button>  second */}
        <button onClick={this.clickHandling}>Click</button>


      </div>
    )
  }
}

export default EventBind
