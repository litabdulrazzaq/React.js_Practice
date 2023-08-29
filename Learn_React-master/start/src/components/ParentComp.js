import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abdul Razzaq",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abdul Razzaq",
      });
    }, 2000);
  }

  render() {
    console.log("===========  Parent Component =============");
    return (
      <div>
        Parent Component
        {/* <MemoComp name={this.state.name} /> */}
        <PureComp />
      </div>
    );
  }
}

export default ParentComp;
