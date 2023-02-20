import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10
var num2 = 3
// we can use any mathematical expression in JSX
var output = (<div className='container'>
    <div className='row'>
        <div className='col-6 offset-3'>
           <div className='card shadow'>
            <div className='card-header text-center bg-primary'>
            <h2>Forgot Password</h2>
            </div>
           <div className='card-body'>
            <form>
                <input type='email' className='form-control mb-3' placeholder='Enter Your Email' />
                <h4 className='text-center'>OR</h4>
                <input type='number' className='form-control mb-3' placeholder='Enter Your Mobile Number' />
                <div className='mt-3 text-center'>
                <input type='button' className='btn btn-success' Value='Forgot Password' />
                </div>
            </form>
           </div>
           </div>
        </div>
    </div>
</div>
)
root.render(output);