import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCount extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return <button onClick={increamentCount}>Click {count} Count</button>;
  }
}

export default withCounter(ClickCount, 10);
