import { Component } from 'react';
import './Counter.css';

class CounterClassComp extends Component {
  
  constructor(){
    super();
    this.state = {
        counter:0
    };
  }  
  increment = () => {
    console.log("increment");
    //this.state.counter++;
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
};


export default CounterClassComp;

