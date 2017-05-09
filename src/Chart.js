import React, { Component } from 'react';
import {
  Hint,
  HorizontalGridLines,
  LineSeries,
  DiscreteColorLegend,
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
    var lines = data.map(function(item) {
      return <LineSeries
        data={item}
        style={{background: '#fffff'}}
      />
    });

    var legendItems = data.map(function(item) {
      return {
        title: item[0].Company,
        disabled: false
      }
    })

    return <div>
     <XYPlot
      margin={{top:10, left: 60, right: 5, bottom: 30}}
      width={1000}
      height={600}
      >
      <HorizontalGridLines />
      <VerticalGridLines />
      {lines}
      <XAxis title="Date" xType="time" tickTotal={4}/>
      <YAxis title="StockPrice"/>
    </XYPlot>
    <DiscreteColorLegend
      width={1300}
      items={legendItems}
    />
  </div>
  }
}
