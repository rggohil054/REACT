import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function UseEffectHookExample()
{
    var [count,setCount] = useState(0); 
    var [textcolor,setTextColor] = useState(''); 
    useEffect(()=>{
        if(count%2==0)
        {
            setTextColor('text-primary')
        }
        else 
        {
            setTextColor('text-danger')
        }
    });
    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1 className={textcolor}>useffect hook example</h1> <hr/>
                <h2>You have clicked button {count} times</h2>
                <button className='btn btn-danger' onClick={()=> setCount(count + 1)}>Click</button>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookExample />);