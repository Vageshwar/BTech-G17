import {Component} from 'react';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
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
        this.setState({ date: new Date() });  
    }

    render() {
      return (
        <div>
          <h2 style={{ color: 'red' }}>Timer</h2>
          <h3 style={{ color: 'red' }}>{this.state.date.toLocaleTimeString()}</h3>
        </div>
      );
    }
}

export default Clock;