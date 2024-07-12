import { useState } from 'react';
import './Counter.css';

const Counter = () =>{
    const [counter, setCounter] = useState(0);
    const increment = () => {
       setCounter(counter+1);
    };
    return(
        <div className="counter">
            <button onClick={increment}>+1</button>
            <span className='count'>{counter}</span>
        </div>
    );
};


export default Counter;

