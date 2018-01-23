import React, { Component } from 'react';
import {Task} from './components/task';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    events: [], 
    items: [],

    dateName: 3, 
    dateMonth: 1, 
    dateDay: 27, 
    dateYear: 2020,

    dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dateDisplay: this.dateForm
    };

    this.dateForm = this.state.dayList[this.state.dateName] + ', ' + this.state.monthList[this.state.dateMonth] + ' ' + this.state.dateDay + ', ' + this.state.dateYear;

    this.handleTomorrow = this.handleTomorrow.bind(this);
    this.handleYesterday = this.handleYesterday.bind(this);
  }

  handleTomorrow(event) {

    event.preventDefault();

    if (this.state.dateMonth === 0 || this.state.dateMonth === 2 || this.state.dateMonth === 4 || this.state.dateMonth === 6 || this.state.dateMonth === 7
    || this.state.dateMonth === 9 || this.state.dateMonth === 11) {
      if (this.state.dateDay < 31) {
        this.setState({dateDay: this.state.dateDay + 1});
      } else {
        this.setState({dateDay: 1});
        if (this.state.dateMonth !== 11) {
          this.setState({dateMonth: this.state.dateMonth + 1});
        } else {
          this.setState({dateMonth: 0});
          this.setState({dateYear: this.state.dateYear + 1});
        }
      }
    } 

    else if (this.state.dateMonth === 3 || this.state.dateMonth === 5 || this.state.dateMonth === 8 || this.state.dateMonth === 10) {
      if (this.state.dateDay < 30) {
        this.setState({dateDay: this.state.dateDay + 1});
      } else if (this.state.dateDay === 30) {
        this.setState({dateDay: 1});
        this.setState({dateMonth: this.state.dateMonth + 1});
      }
    }

    else {
      if (this.state.dateDay < 28) {
        this.setState({dateDay: this.state.dateDay + 1});
      } else if (this.state.dateDay === 28 && this.state.dateYear % 4 === 0) {
        this.setState({dateDay: this.state.dateDay + 1});
      } else {
        this.setState({dateDay: 1});
        this.setState({dateMonth: this.state.dateMonth + 1})
      }
    }
    if (this.state.dateName === 6) {
      this.setState({dateName: 0});
    } else {
      this.setState({dateName: this.state.dateName + 1});
    }
  this.dateForm = this.state.dayList[this.state.dateName] + ', ' + this.state.monthList[this.state.dateMonth] + ' ' + this.state.dateDay + ', ' + this.state.dateYear;
  this.setState({dateDisplay: this.dateForm});
  }

  handleYesterday(event) {
    event.preventDefault();

    if (this.state.dateDay === 1) {
      if (this.state.dateMonth - 1 === 0 || this.state.dateMonth - 1 === 2 ||
        this.state.dateMonth - 1 === 4 || this.state.dateMonth - 1 === 6 ||
        this.state.dateMonth - 1 === 7 || this.state.dateMonth - 1 === 9 ||
        this.state.dateMonth === 0) {
          this.setState({dateDay: 31});
          if (this.state.dateMonth === 0) {
            this.setState({dateYear: this.state.dateYear - 1});
            this.setState({dateMonth: 11});
          } else {
            this.setState({dateMonth: this.state.dateMonth - 1});
          }
      } else if (this.state.dateMonth - 1 === 3 || this.state.dateMonth- 1 === 5 ||
        this.state.dateMonth- 1 === 8 || this.state.dateMonth- 1 === 10) {
          this.setState({dateDay: 30});
          this.setState({dateMonth: this.state.dateMonth - 1});
      } else if (this.state.dateMonth - 1 === 1) {
        if (this.state.dateYear % 4 === 0) {
          this.setState({dateDay: 29});
          this.setState({dateMonth: 1});
        } else {
          this.setState({dateDay: 28});
          this.setState({dateMonth: 1});
        }
      }
    } else {
      this.setState({dateDay: this.state.dateDay - 1});
    }
    if (this.state.dateName === 0) {
      this.setState({dateName: 6});
    }  else {
      this.setState({dateName: this.state.dateName +-1});
    }
  this.dateForm = this.state.dayList[this.state.dateName] + ', ' + this.state.monthList[this.state.dateMonth] + ' ' + this.state.dateDay + ', ' + this.state.dateYear;
  this.setState({dateDisplay: this.dateForm});
  }

  render() {
    return(
      <div>
        <div sub='date'>
          <p>{this.state.dateDisplay}</p>
          <button onClick = {this.handleTomorrow}>Tomorrow</button>
          <button onClick = {this.handleYesterday}>Yesterday</button>
        </div>
        <div sub='lists'>
          <p>Events:</p>
          <ol type='1'>
          <Task taskID='00000000'/>
          </ol>
          <p>Items:</p>
          <ul>
          <Task/>
          </ul>
        </div>
      </div>
      )
  }
}

export default App;