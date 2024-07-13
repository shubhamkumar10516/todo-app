import { Component } from 'react';
import PropsTypes from 'prop-types';
import './Counter.css';

class CounterClassComp extends Component {
    
  
  increment = () => {
    this.props.increment(this.props.count);
  };
  
  render = () => {
   
    return (
      <div className="counter">
        <button onClick={this.increment}>{this.props.count < 0? '':'+'}{this.props.count}</button>
      </div>
    );
  }
  
};

CounterClassComp.defaultProps = {
    count:1
};
export default CounterClassComp;

