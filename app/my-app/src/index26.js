import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function UseStateHookExample()
{
    var [count,setCount] = useState(0); 
    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>usestate hook example</h1> <hr/>
                <h2>You have clicked button {count} times</h2>
                <button className='btn btn-danger' onClick={()=> setCount(count + 1)}>Click</button>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseStateHookExample />);