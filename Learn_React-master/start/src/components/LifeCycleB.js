import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("LifeCycleB constructor method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB Static Method");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount method");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB ComponentShouldUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB ComponentDidUpdate");
  }

  render() {
    console.log("LifeCycleB Render method");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
