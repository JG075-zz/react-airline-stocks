import React, { Component } from 'react';
import {LineChart} from 'react-d3-basic';
import Chart from './Chart';
import './App.css';

const data = require('../data/airlines');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
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
