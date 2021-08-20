import React, { Component } from 'react';
import "./stylesheet.scss";
import data from './data.json';
import Pagination from './Pagination';

//divide data per 4
//get length of how many chunks of data - that's the number of pages - total number
// get current page
const DEFAULT_SIZE = 3;
const divideData = (arr, leng) => {
    let newArr = [];
    if(Array.isArray(arr) ) {
        let chunk = arr.slice(0, leng);
        newArr.push(chunk);
    }
    console.log(newArr);
}
const getPage = (array, howManyToShow, index) => {
    const paginatedDate = divideData(array, howManyToShow);
    console.log(paginatedDate);
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
               {
                getPage(data, DEFAULT_SIZE, 1)
               }
            </div>
        )
    }
}

export default Page;