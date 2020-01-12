import React from 'react';
import { 
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

const BarChart = props => {

  return (
    <div style={{'marginLeft': '25px'}}>
      <XYPlot
        stackBy="y"
        xType="ordinal"
        width={600}
        height={600}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          cluster="threadLoad"
          data={props.data1}
          style={{}}
        />
        <VerticalBarSeries
          cluster="threadLoad"
          data={props.data2}
          style={{}}
        />
      </XYPlot>
    </div>
  );
}

export default BarChart;
