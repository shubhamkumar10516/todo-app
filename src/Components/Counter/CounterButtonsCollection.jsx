import { Component } from "react";
import CounterClassComp from "./CounterClassComp";

class CounterButtonsCollection extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment(totalCount) {
    //this.setState({counter: this.state.counter+1})
    console.log("increment in parent: ", totalCount);
    this.setState({ counter: this.state.counter + totalCount });
  }
  reset() {
    this.setState(() => {
      return { counter: 0 };
    });
  }
  render() {
    return (
      <>
        <div className="column-grid">
          {/*<Counter count = {5}/>
       <Counter count = {10}/>
       <Counter count = {15}/>*/}

          <div>
            <CounterClassComp count={+1} increment={this.increment} />
            <CounterClassComp count={+2} increment={this.increment} />
            <CounterClassComp count={+3} increment={this.increment} />
          </div>
          <div>
            <CounterClassComp count={-1} increment={this.increment} />
            <CounterClassComp count={-2} increment={this.increment} />
            <CounterClassComp count={-3} increment={this.increment} />
          </div>
        </div>
        <div>
          <span className="count span-text">{this.state.counter}</span>
        </div>
        <div className="column-grid">
          <button className="red-button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </>
    );
  }
};

export default CounterButtonsCollection;
