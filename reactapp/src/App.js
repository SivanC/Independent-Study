import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    events: [], 
    items: [],

    dateName: 1, 
    dateMonth: 4, 
    dateDay: 5, 
    dateYear: 2020,

    dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dateDisplay: null
    };

    this.dateForm = this.state.dayList[this.state.dateName] + ', ' + this.state.monthList[this.state.dateMonth] + ' ' + this.state.dateDay + ', ' + this.state.dateYear;

    this.handleTomorrow = this.handleTomorrow.bind(this);
    this.handleYesterday = this.handleYesterday.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({dateDisplay: this.dateForm});
  }

  componentDidUpdate() {
    this.dateForm = this.state.dayList[this.state.dateName] + ', ' + this.state.monthList[this.state.dateMonth] + ' ' + this.state.dateDay + ', ' + this.state.dateYear;
  }

  handleTomorrow(event) {

    switch(this.state.dateDay) {
      case 30:
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
          
    }
  }

  handleYesterday(event) {
    switch (this.state.dateDay) {
      case 1:
        switch(this.state.dateMonth - 1) {
          case 0:
          case 2:
          case 4:
          case 6:
          case 7:
          case 9:
            this.setState({dateDay: 31});
            break;
          case 3:
          case 5:
          case 8:
          case 10:
            this.setState({dateDay: 30});
            break;
          case 1:
            if (this.state.dateYear%4 === 0){
              this.setState({dateDay: 29});
            } else {
              this.setState({dateDay: 28});
            }
            break;
          case -1:
            this.setState({dateDay: 31});
            this.setState({dateMonth: 11});
            this.setState({dateYear: this.state.dateYear - 1});
            break;
          default:
            break;
        }
      this.setState({dateMonth: this.state.dateMonth - 1})
      break;
      default:
        this.setState({dateDay: this.state.dateDay - 1});
    }

    switch (this.state.dateName) {
      case 0:
        this.setState({dateName: 6});
        break;
      default:
        this.setState({dateName: this.state.dateName - 1});
    }

    this.setState({dateDisplay: this.dateForm});
  }

  render() {
    return(
      <div>
        <div sub='date'>
          <p>{this.state.dateDisplay}</p>
          <button onClick = {this.handleYesterday}>Yesterday</button>
          <button onClick = {this.handleTomorrow}>Tomorrow</button>
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
      </div>
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

      dateInfo: 4
    };
  }

  render() {
    if (this.state.dayID == this.state.dateInfo[0] && this.state.monthID == this.state.dateInfo[1] && this.state.yearID == this.state.dateInfo[2]) {
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
    return null;
    }
  }
}

export default App;