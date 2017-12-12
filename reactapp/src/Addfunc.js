import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {n1: '', n2: '', numSum: ''}

    this.handleChange1 = ::this.handleChange1;
    this.handleChange2 = ::this.handleChange2;
    this.onSubmit = ::this.onSubmit;
  }

  handleChange1(event) {
    event.preventDefault();
    const phItem = event.target.value;
    this.setState({n1: phItem});
  }

  handleChange2(event) {
    event.preventDefault();
    const phItem = event.target.value;
    this.setState({n2: phItem});
  }

  onSubmit(event) {
    event.preventDefault();
    if(!(isNaN(parseFloat(this.state.n1, 10))) && !(isNaN(parseFloat(this.state.n2, 10)))) {
      const sum = parseFloat(this.state.n1, 10) + parseFloat(this.state.n2, 10);
      this.setState({numSum: sum});
    }
    else {
      this.setState({numSum: 'Sorry, one of your inputs is not a number.'});
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <div name='Buttons and Input'>
            <input placeholder='Number One' onChange={this.handleChange1}/>
            <input placeholder='Number Two' onChange={this.handleChange2}/>
            <button type='submit'>Add</button>
          </div>
        </form>
        <p>{this.state.numSum}</p>
      </div>
    );
  }
}

export default Addfunca;