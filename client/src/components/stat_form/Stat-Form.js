import React, { Component } from 'react';
import './Stat-Form.css'
import axios from 'axios';

 class StatForm extends Component {
   onSubmit = (e) => {
     e.preventDefault();
      if (this.props.editing === true) {
        const {date, bench, squat, deadlift, id} = this.props.currentStat
        axios.patch(`api/strength_stats/${id}`, {date, bench, squat, deadlift})
          .then((result) => {
            this.props.updateStats(result.data)

          })
      } else {
        const {date, bench, squat, deadlift} = this.props.currentStat
        axios.post ('api/strength_stats', {date, bench, squat, deadlift})
        .then((result) => {
          this.props.updateStats(result.data)

        })
      }
   }

   onChange = (e) => {this.props.updateStat(e.target.name, e.target.value)}

   render() {
     const {date, bench, squat, deadlift, id} = this.props.currentStat;
     return (
       <form className="Stat" onSubmit = {this.onSubmit} >
        <h4>{this.props.editing ? "Update Result": "Add Results"}!</h4>
        <div className="row">

          <div className="col-md-3">
            <p className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              required
              className="form-control"
              onChange={this.onChange}
              value={date}
            />
            </p>
          </div>
          <div className="col-md-3">
            <p className="form-group">
            <label htmlFor="bench">Bench Press</label>
            <input
              type="text"
              name="bench"
              required
              className="form-control"
              onChange={this.onChange}
              value={bench}
            />
            </p>
          </div>
          <div className="col-md-3">
        <p className="form-group">
          <label htmlFor="squat">Barbell Squat</label>
          <input
            type="text"
            name="squat"
            required
            className="form-control"
            onChange={this.onChange}
            value={squat}
          />
        </p>
        </div>
        <div className="col-md-3">
        <p className="form-group">
          <label htmlFor="deadlift">Deadlift</label>
          <input
            type="text"
            name="deadlift"
            required
            className="form-control"
            onChange={this.onChange}
            value={deadlift}
          />
        </p>
        </div>
        </div>
        <p className="form-group">
          {
            this.props.editing &&
            <a className="btn btn-default"
              style={{marginRight: ".5em"}}
              onClick={this.props.stopEdit}
              >Cancel</a>
          }
         <input
           type="submit"
           value={this.props.editing ? "Update Result" : "Add result"}
           className= "btn btn-primary"
         />
       </p>

       </form>
     )
   }
  }


export default StatForm;
