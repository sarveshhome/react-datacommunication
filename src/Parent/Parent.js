import React from "react";
import { ChildA } from "./Child/Child";

class ParentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: ""
    };
  }
  componentDidMount() {
    this.receivedChildData();
  }
  receivedChildData = data => {
    this.setState({
      employeeName: data
    });
  };
  render() {
    return (
      <div>
        <ChildA childData={this.receivedChildData} />
        {this.state.employeeName}
      </div>
    );
  }
}
export { ParentA };
