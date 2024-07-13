import { useState } from 'react';
import './Counter.css';

const Counter = (props) =>{
    const [counter, setCounter] = useState(0);
    let count = props.count;
    const increment = () => {
       setCounter(counter+count);
    };
    return(
        <div className="counter">
            <button onClick={increment}>+{count}</button>
            <span className='count'>{counter}</span>
        </div>
    );
};


export default Counter;

