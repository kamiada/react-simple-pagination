import React, { Component, Fragment } from "react";
import "./stylesheet.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.generateButtons = this.generateButtons.bind(this);
  }
  generateButtons = (number) => {
    const arrButtons = [];
   for(let n=0; n<number; n++) {
      arrButtons.push(<button onClick={() => this.props.onClick(n)}>{n}</button>);
   }
   return arrButtons;
}

  render() {
    const {numberOfButtons} = this.props;
    return <div>{this.generateButtons(numberOfButtons)}</div>;
  }
}
export default Pagination;
