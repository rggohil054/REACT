import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function CandidateData(candidate){
    return(<div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                <div className='card-header text-center bg-secondary'><h3>{candidate.heading}</h3></div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <tr>
                            <td>Name</td>
                            <td>{candidate.name}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td>{candidate.dob}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{candidate.gender}</td>
                        </tr>
                        <tr>
                            <td>Blood Group</td>
                            <td>{candidate.bloodgroup}</td>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <td>{candidate.mobile}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{candidate.email}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{candidate.weight}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{candidate.height}</td>
                        </tr>
                        <tr>
                            <td>Hobbies</td>
                            <td>{candidate.hobbies}</td>
                        </tr>
                        <tr>
                            <td>Education</td>
                            <td>{candidate.education}</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>)
}
var candidate={
    heading:'BioData',
    name:'Rushirajsinh Gohil',
    dob:'30-04-1999',
    gender:'male',
    bloodgroup:'O-positive',
    mobile:9601616030,
    email:'rggohil054@gmail.com',
    weight:55,
    height:'165cm',
    hobbies:'writing',
    education:'Graduate',

}
root.render(CandidateData(candidate));