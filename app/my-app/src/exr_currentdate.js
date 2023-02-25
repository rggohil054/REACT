//6) Create javascript function that display current date in following format using decision making in JSX    
// 23-february-2023
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var now = new Date(); // Date() is library class in javascript 
//create javascript object 
console.log(now);
var time = {
    day : now.getDate(),
    month : now.getMonth(),
    year : now.getFullYear()
};
let Greetings = function(m)
{
    if(m==0)
    {
        return('January')
    }
    else if(m==1)
    {
        return('February')
    }
    else if(m==2)
    {
        return('March')
    }
    else if(m==3)
    {
        return('April')
    }
    else if(m==4)
    {
        return('May')
    }
    else if(m==5)
    {
        return('June')
    }
    else if(m==6)
    {
        return('July')
    }
    else if(m==7)
    {
        return('August')
    }
    else if(m==8)
    {
        return('September')
    }
    else if(m==9)
    {
        return('October')
    }
    else if(m==10)
    {
        return('November')
    }
    else
    {
        return('December')
    }

}


let Page = function()
{
    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
               <h1> {time.day}- {Greetings(time.month)}-{time.year}</h1>
            </div>
        </div>
    </div>);
}
root.render(Page());