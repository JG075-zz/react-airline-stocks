import React, { Component } from 'react';
import {
  Hint,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis
} from 'react-vis';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
  }

  _rememberValue(value) {
    this.setState({value});
  }

  _forgetValue() {
    this.setState({
      value: null
    });
  }

  render() {
    const {data} = this.props;
    const {value} = this.state;
    return <div>
     <XYPlot
      margin={{top:10, left: 60, right: 5, bottom: 30}}
      width={945}
      height={400}
      >
      <HorizontalGridLines />
      <VerticalGridLines />
      <LineSeries
        data={data}
        style={{background: '#fffff'}}
      />
    <XAxis title="Date" xType="time" xDomain = {[1491519600000, 1493938800000]} xRange = {[0, 2000]}/>
      <YAxis title="StockPrice"/>
    </XYPlot>
  </div>
  }
}
