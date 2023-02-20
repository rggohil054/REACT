import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10
var num2 = 3
// we can use any mathematical expression in JSX
var output = (<div className='conainer mt-5'>
    <div className='row'>
        <div className='col-6 offset-3'>
            <div className='card shadow'>
                <div className='card-header bg-primary'>
                    <h3>Login</h3>
                </div>
                <div card-body>
                    <form>
                        <div className='mb-3'>
                            <input type='email' className='form-control' placeholder='email'/>
                        </div>
                        <div className='mb-3'>
                            <input type='password' className='form-control' placeholder='password'/>
                        </div>
                        <div className='mb-3 text-end'>
                            <input type='button' className='btn btn-success' value='Login'/>&nbsp;
                            <input type='button' className='btn btn-danger' value='clear all'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>)
root.render(output);