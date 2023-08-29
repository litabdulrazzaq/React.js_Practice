import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increamentCount = () => {
    this.setState((preState) => {
      return { count: preState.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.increamentCount)}</div>
    );
  }
}

export default Counter;
