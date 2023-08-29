import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  render() {
    // 1. if/else

    // if(this.state.isLoggedIn){
    //     return <h1>Abdul</h1>
    // }else{
    //     return <h1>Razzaq</h1>
    // }

//   2. Element Variables
    // let message
    // if(this.state.isLoggedIn){
    //     message = <h1>Abdul</h1>
    // }else{
    //     message = <h1>Razzaq</h1>
    // }
    // return <div>{message}</div>

    // 3. Ternary Operation

    // return this.state.isLoggedIn ? <div>Abdul</div> :  <div>Razzaq</div>

    // 4. Short Circuit Operator

    return this.state.isLoggedIn && <div>Abdul</div> 

  }




}

export default UserGreeting
