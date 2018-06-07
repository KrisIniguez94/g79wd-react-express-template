import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component {

   createStats = (stats) => {
    let date = [];
    let bench = [];
    let squat = [];
    let deadlift = [];
    for (var i = 0; i < stats.length; i++ ) {
      date.push(stats[i].date)
      bench.push(stats[i].bench)
      squat.push(stats[i].squat)
      deadlift.push(stats[i].deadlift)
    }
    return {date, bench, squat, deadlift}
  }
  render() {
    const testData = this.createStats(this.props.strengthStats)
    console.log(testData)
    const data = {
      labels: testData.date,
      datasets: [
        {
          label: 'Bench',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: testData.bench // benchStats
        },
        {
            label: 'Squat',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: testData.squat
        },
        {
            label: 'Deadlift',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: testData.deadlift
        }
      ]
    };
    return (
      <div className="chart">
       <Line data={data} />
      </div>
    )
  }
}

export default Chart;
