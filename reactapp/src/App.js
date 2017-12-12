import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

const Layout = StackNavigator({
  Main: {screen: App}, 
  Alt: {screen: Alt}
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'This is a title'
  }

  render() {
    const {navigate} = this.props.navigation;
    return(
      <button type='button' onClick = {() => navigate('Alt', {id: '2'})}>Click me</button>
    )
  }
}

class Alt extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  static navigationOptions = {
    title: 'This is the alt screen'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <button onClick = {() => navigate('App', {id: 1})}>Go places</button>
    )
  }
}

export default App;