import React, { Component, Fragment } from "react";
import "./stylesheet.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.generateButtons = this.generateButtons.bind(this);
  }
  generateButtons = () => {
    const { numberOfButtons } = this.props;
    console.log(numberOfButtons)
    if (numberOfButtons > 0) {
      for(let n=0; n<numberOfButtons; n++) {
        <button>n</button>
      }
    } else {
      return <button>1</button>;
    }
  };
  render() {
    return <div>{this.generateButtons()}</div>;
  }
}
export default Pagination;
