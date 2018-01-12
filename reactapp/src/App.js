import React, { Component } from 'react';

class App extends Component {
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
  }

  handleTomorrow(event) {

    event.preventDefault();

    const phDay = this.state.dateDay;
    const phMonth = this.state.dateMonth;
    const phYear = this.state.dateYear;
    const phName = this.state.dateName;

    if (this.state.dateMonth == 0 || this.state.dateMonth == 2 || this.state.dateMonth == 4 || this.state.dateMonth == 6 || this.state.dateMonth == 7
    || this.state.dateMonth == 9 || this.state.dateMonth == 11) {
      if (this.state.dateDay < 31) {
        this.setState({dateDay: phDay + 1});
      } else {
        this.setState({dateDay: 1});
        if (this.state.dateMonth != 11) {
          this.setState({dateMonth: phMonth + 1});
        } else {
          this.setState({dateMonth: 0});
          this.setState({dateYear: phYear + 1});
        }
      }
    } 

    else if (this.state.dateMonth == 3 || this.state.dateMonth == 5 || this.state.dateMonth == 8 || this.state.dateMonth == 10) {
      if (this.state.dateDay < 30) {
        this.setState({dateDay: phDay + 1});
      } else if (this.state.dateDay == 30) {
        this.setState({dateDay: 1});
        this.setState({dateMonth: phMonth + 1});
      }
    }

    else {
      if (this.state.dateDay < 28) {
        this.setState({dateDay: phDay + 1});
      } else if (this.state.dateDay == 28 && this.state.dateYear % 4 == 0) {
        this.setState({dateDay: phDay + 1});
      } else {
        this.setState({dateDay: 1});
        this.setState({dateMonth: phMonth + 1})
      }
    }
    if (this.state.dateName == 6) {
      this.setState({dateName: 0});
    } else {
      this.setState({dateName: phName + 1});
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
          <button>Yesterday</button>
        </div>
        <div sub='lists'>
          <p>Events:</p>
          <ol type='1'>
          <Task taskName='Stav Party' taskLoc='Stav&apos;s House' taskStart='6:30' taskEnd='7:00' isEvent='true'/>
          </ol>
          <p>Items:</p>
          <ul>
          <Task taskDesc='do stuff' isEvent='false'/>
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
    };
  }

  render() {
    if (this.props.isEvent == 'true') {
      return(
        <p>{this.props.taskName}, {this.props.taskLoc}, {this.props.taskStart}-{this.props.taskEnd}</p>
       )
    } else {
      return (
        <p>{this.props.taskDesc}</p>
      )
    }
  }
}

export default App;