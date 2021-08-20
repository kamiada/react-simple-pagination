import React, { Component } from 'react';
import "./stylesheet.scss";
import data from './data.json';
import Pagination from './Pagination';

//divide data per 4
//get length of how many chunks of data - that's the number of pages - total number
// get current page
const DEFAULT_SIZE = 4;
const divideData = (arr, leng) => {
    if(arr.length > 0 ) {

    }
}
const getPage = (array, howManyToShow, index) => {
    const paginatedDate = divideData(array, howManyToShow);

}

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageIndex : 1,
            totalNumbOfPages : 0,
        }
    }

    render() {
        return ( 
            <div className="container">
                {this.props.data}
            </div>
        )
    }
}

export default Page;