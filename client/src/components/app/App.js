import React, { Component } from 'react';
import './App.css';
import StatsTable from '../stats_table/Stats-Table';
import Header from '../header/Header';
import StatForm from '../stat_form/Stat-Form';
// import StrengthStat from '../strength_stat/Strength-Stat';
import Chart from '../chart/Chart';

class App extends Component {
  state = {
    loading: true,
    strengthStats: [],
    editing: false,
    currentStat: {
      id:null,
      date:"",
      bench:"",
      squat:"",
      deadlift:""
    }
  }

  updateStats = (strengthStats) => {
    this.setState({
      strengthStats: strengthStats,
      editing: false,
      currentStat: {
        id: null,
        date:"",
        bench:"",
        squat:"",
        deadlift:""
      }
    })
  }

  updateStat = (attribute, value) => {
    this.setState(
      {currentStat: {...this.state.currentStat, [attribute]: value}}
    )
  }

  editStat= (id) => {
    const stat = this.state.strengthStats.find((newStat) => newStat.id === id)
    this.setState({editing:true, currentStat: stat})
  }

  stopEdit = (id) => {
    this.setState({
      editing: false,
      currentStat: {
        id: null,
        date:"",
        bench:"",
        squat:"",
        deadlift:""
      }
    })
  }



  componentWillMount = async () => {
    const response = await fetch('/api/strength_stats')
    const json = await response.json()
    if (json.strength_stats) this.setState({ loading: false, strengthStats: json.strength_stats})
    localStorage.getItem('strengthStats') && this.setState({
      strengthStats: JSON.parse(localStorage.getItem('strengthStats'))
    })
  }

  componentDidMount() {
    if(localStorage.getItem('strengthStats')) {
      this.fetchData()
    } else {
      console.log('Using data from local storage');
    }
  }

  fetchData() {
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('strengthStats', JSON.stringify(nextState.strengthStats));
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Chart strengthStats={this.state.strengthStats} />
        <StatForm
        updateStat={this.updateStat}
        updateStats={this.updateStats}
        currentStat= {this.state.currentStat}
        editing={this.state.editing}
        editStat={this.editStat}
        stopEdit={this.stopEdit}
        />
        {
          !this.state.loading &&
          <StatsTable updateStats={this.updateStats} updateStat={this.updateStat} strengthStats={this.state.strengthStats} editStat={this.editStat}  />
        }

      </div>
    );
  }
}

export default App;
