import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return <button onClick={increamentCount}>Click {count} Count</button>;
  }
}

export default ClickCounterTwo;
