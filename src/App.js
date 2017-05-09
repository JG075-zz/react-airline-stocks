import React, { Component } from 'react';
import Chart from './chart';
import './App.css';

const data = require('../data/airlines');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  componentWillMount() {
    var dataArray = [[]];
    var curretArr = 0;
    var _this = this;

    data.forEach(function(item, index) {
      if (item.Date == '07/04/2017') {
        dataArray.push([]);
        curretArr++;
      }
      item.x = Number(_this._convertDate(item.Date));
      item.y = Number(item.StockPrice);

      dataArray[curretArr].push(item);
    });
    dataArray.splice(0, 1);

    console.log(dataArray);
    this.setState({
      data: dataArray
    })
  }

  _convertDate(date) {
    date = date.split("/");
    var newDate = date[1]+"/"+date[0]+"/"+date[2];
    return new Date(newDate).getTime();
  }

  render() {
    return (
      <div>
        <h1>US Airline Stock Prices After 09/04/2017 Incident</h1>
        <Chart data={this.state.data}/>
      </div>
    );
  }
}

export default App;
