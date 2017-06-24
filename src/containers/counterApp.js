import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter'
import * as counterActions from '../actions/counterActions'
import { connect } from 'react-redux'

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, actions } = this.props;
    return (
      <Counter
        count={count}
        {...actions}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Note: stateにはsrc/reducers/counter.jsのfunction counterが含まれてくる
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
