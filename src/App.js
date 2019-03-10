import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {simpleAction} from './actions/simpleAction';

class App extends Component {

  testButtonClick = () => {
    console.log("yoyo")
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        HELLO WORLD
        <br/>
        <button onClick={this.testButtonClick}>Simple Action</button>
        {JSON.stringify(this.props.result)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    result: state.simple.result
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
