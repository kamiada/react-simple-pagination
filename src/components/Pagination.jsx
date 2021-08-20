import React, { Component, Fragment } from 'react';
import "./stylesheet.scss";

class Pagination extends Component {
    generateButtons = () => {
        
    }
    render() {
        return (
           <Fragment>
           {this.generateButtons()}
           </Fragment>
        )
    }
}
export default Pagination;