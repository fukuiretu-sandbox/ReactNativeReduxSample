import React, { Component } from 'react'
import { Provider } from 'react-redux';
import CounterApp from './CounterApp'
import store from '../config/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
