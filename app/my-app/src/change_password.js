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
            <h2>Change Password</h2>
            </div>
           <div className='card-body'>
            <form>
                <input type='text' className='form-control mb-3' placeholder='Enter Current Password' />
                <input type='text' className='form-control mb-3' placeholder='Enter New Password' />
                <input type='text' className='form-control mb-3' placeholder='Enter Conform Password' />
                <div className='mt-3 text-center'>
                <input type='button' className='btn btn-success' Value='Change Password' />
                </div>
            </form>
           </div>
           </div>
        </div>
    </div>
</div>
)
root.render(output);