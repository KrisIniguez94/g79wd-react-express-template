import React, { Component } from 'react';
import axios from 'axios';

class StrengthStat extends Component {

  onClick=(id)=> {
    axios.delete(`/api/strength_stats/${id}`)
    .then((result) => {this.props.updateStats(result.data)});
  }
  render() {
    const {date, bench, squat, deadlift, id} = this.props.strengthStat
    return (
      <tr>
      <td>{date}</td>
      <td>{bench} lbs.</td>
      <td>{squat} lbs.</td>
      <td>{deadlift} lbs. </td>
      <td>{parseInt(bench, 0) + parseInt(squat, 0) + parseInt(deadlift, 0)}</td>
      <td><span className = "glyphicon glyphicon-pencil" onClick = { () => this.props.editStat(id)} /></td>
      <td><span className="glyphicon glyphicon-remove-sign" onClick={() => this.onClick(id)} /></td>

      </tr>

    )
  }
}

export default StrengthStat;
