import React from "react";

const withCounter = (WrappedComponent, increamentNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState((preState) => {
        return { count: preState.count + increamentNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
