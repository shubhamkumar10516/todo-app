import './Counter.css';

const Counter = () =>{
    //const [count, setCount] 
    const increment = () => {
        console.log("increment");
    };
    return(
        <div className="counter">
            <button onClick={increment}>+1</button>
            <span className='count'>0</span>
        </div>
    );
};


export default Counter;

