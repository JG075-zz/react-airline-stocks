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
import HintContent from './hint-content';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      pos: {
        x: 0,
        y: 0
      },
      showLabel: false,
      currentCompany: ""
    };
    this._rememberValue = this._rememberValue.bind(this);
    this._forgetValue = this._forgetValue.bind(this);
    this._handleSeriesMouseOver = this._handleSeriesMouseOver.bind(this);
    this._handleSeriesMouseOut = this._handleSeriesMouseOut.bind(this);
  }

  _rememberValue(value, info) {
    this.setState({
      pos: {
        x: info.event.pageX,
        y: info.event.pageY
      }
    });
  }

  _forgetValue() {
    this.setState({
      value: 0
    });
  }

  _handleSeriesMouseOver(info) {
    this.setState({
      showLabel: true
    });
  }

  _handleSeriesMouseOut(info) {
    console.log(info.data);
    this.setState({
      showLabel: false
    });
  }

  render() {
    const {data} = this.props;

    const _this = this;
    const lines = data.map((item, index) => {
      return <LineSeries
        key={index}
        data={item}
        style={{background: '#fffff'}}
        onSeriesMouseOver={_this._handleSeriesMouseOver}
        onSeriesMouseOut={_this._handleSeriesMouseOut}
        onNearestX={_this._rememberValue}
        onValueMouseOut={_this._forgetValue}
      >
    </LineSeries>
    });

    const legendItems = data.map((item) => {
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
      {this.state.showLabel && <HintContent pos={this.state.pos} />}
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
