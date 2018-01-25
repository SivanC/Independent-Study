import React, { Component } from 'react';

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
    this.giveState = this.giveState.bind(this);
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

  giveState() {
    return(
      [this.state.dateDay, this.state.dateMonth, this.state.dateYear, this.state.dateName]
      )
  }

  render() {
    var stateInfo = this.giveState();
    return(
      [<div>
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
          <Task taskID='04182001'/>
          </ul>
        </div>
      </div>,

      stateInfo]
      )
  }
}

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {

      taskName: 'title',
      taskLoc: '',
      taskStart: '',
      taskEnd: '',
      taskDesc: 'hello',
      isEvent: 'true',

      dayID: this.props.taskID[0] + this.props.taskID[1],
      monthID: this.props.taskID[2] + this.props.taskID[3],
      yearID: this.props.taskID[4] + this.props.taskID[5] + this.props.taskID[6] + this.props.taskID[7],

      dateInfo: App.renderComponent[1]
    };
  }

  render() {
    if (this.state.dayID == dateInfo[0] && this.state.monthID == dateInfo[1] && this.state.yearID == dateInfo[2]) {
      if (this.state.isEvent ===  'true') {
        return(
          <p>{this.state.taskName}, {this.state.taskLoc}, {this.state.taskStart}-{this.state.taskEnd}</p>
         )
      } else {
        return (
          <p>{this.state.taskDesc}</p>
      )
    }
  } else {
    return;
    }
  }
}

export default App;