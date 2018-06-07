import React, { Component } from 'react';
import StrengthStat from '../strength_stat/Strength-Stat';
import './Stats-Table.css';

class StatsTable extends Component {

  render() {
    const strengthStatRows = this.props.strengthStats.map( (strengthStat) => {
      return <StrengthStat key={strengthStat.id} strengthStat={strengthStat} updateStats={this.props.updateStats} editStat={this.props.editStat} />
    });

    return (
      <div className="Table">
        <table className="table table-striped">
          <thead className="">
            <tr className="">
              <th>Date</th>
              <th>Bench</th>
              <th>Squat</th>
              <th>Deadlift</th>
              <th>Total</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {strengthStatRows}
          </tbody>
        </table>

      </div>
    )
  }
}

export default StatsTable;
