import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    const { currentTime } = this.state;
    return (
        <h3 className='current-time'>Current Time: {currentTime.toLocaleTimeString()}</h3>
    );
  }
}

export default Clock;