import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyTable from './MyTable'
const root = ReactDOM.createRoot(document.getElementById('root'));
function Resturant()
{
    return(
    <div className='container'>
        <div className='row'>
                <MyTable no='1' name='Divyesh Patel' dish='2' />
                <MyTable no='2' name='Yug Patel' dish='2' />
                <MyTable no='3' name='Rutwik galwala' dish='4' />
                <MyTable no='4' name='Kenil Patel' dish='3' />
                <MyTable no='5' name='Ram Patel' dish='5' />
                <MyTable no='6' name='Shiv Patel' dish='5' />
                <MyTable no='7' name='Krhina Patel' dish='5' />
                <MyTable no='8' name='Vishnu Patel' dish='5' />
        </div>
    </div>
    );
}
root.render(<Resturant />);