import logo from './logo.svg';
import './App.css';
import News from './News';
import { connect } from 'react-redux';
import React, { Component } from 'react'

// xem tiếp 111

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.duLieu}
          <News />
        </header>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    duLieu: state.array
  }
}

export default connect(mapStateToProps)(App);
