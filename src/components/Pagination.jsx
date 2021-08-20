import React, { Component, Fragment } from "react";
import "./stylesheet.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.generateButtons = this.generateButtons.bind(this);
  }
  generateButtons = () => {
    const { numberOfButtons } = this.props;
    if (numberOfButtons.length > 0) {
        numberOfButtons.map((element, index) => 
            <button>
                {element[index]}
            </button>
        )
    }
  };
  render() {
    return <Fragment>{this.generateButtons()}</Fragment>;
  }
}
export default Pagination;
