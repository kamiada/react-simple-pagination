import React, { Component } from "react";
import "./stylesheet.scss";
import data from "./data.json";
import Pagination from "./Pagination";

//divide data per 3
//get length of how many chunks of data - that's the number of pages - total number
// get current page
const DEFAULT_SIZE = 3;

const divideData = (arr, leng) => {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (i > arr.length) {
        break;
      }
      let chunk = arr.slice(i, leng);
      newArr.push(chunk);
      leng += DEFAULT_SIZE;
      i += DEFAULT_SIZE -1;
    }
  }
  return newArr;
};
const getPage = (array, howManyToShow, indexToShow) => {
  const paginatedData = divideData(array, howManyToShow);
  const totalNumbOfPages = paginatedData.length;
  return { currentPage: paginatedData[indexToShow], totalNumb: totalNumbOfPages };
};

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex: 0,
      totalNumbOfPages: 0,
      paginatedData: [],
    };
  }
  
  render() {
    return <div className="container">
    <Pagination 
      numberOfButtons={this.state.totalNumbOfPages}
    />
    </div>;
  }
}

export default Page;
