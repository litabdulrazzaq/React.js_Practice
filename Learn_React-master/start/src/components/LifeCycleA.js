import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("LifeCycleA constructor method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA Static Method");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount method");
    <LifeCycleB />;
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA ComponentShouldUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log("LifeCycleA getSnapshotoBefreUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA ComponentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codevolution",
    });
  };

  render() {
    console.log("LifeCycleA Render method");

    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Update</button>

        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
