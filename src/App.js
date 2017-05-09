import React, { Component } from 'react';
import Chart from './chart';
import './App.css';

const data = require('../data/one');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  componentWillMount() {
    this.setState({
      data: data.map(d => ({
          ...d,
          x: Number(this._convertDate(d.Date)),
          y: Number(d.StockPrice)
        }
      ))
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
