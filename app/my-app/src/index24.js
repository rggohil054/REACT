import React from 'react';
import ReactDOM from 'react-dom/client';
//UnControlled 
class ChangePasswordForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.password = React.createRef();
        this.new_password = React.createRef();
        this.confirm_new_password = React.createRef();
    }
    SubmitForm = (event) =>{
        console.log(this.password.current.value);
        console.log(this.new_password.current.value);
        console.log(this.confirm_new_password   .current.value);
        event.preventDefault();
    }
    render()
    {
        return (<div className='container'>
        <div className='row'>
            <div className='col-lg-8 offset-2'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h3>Change Password</h3>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={this.SubmitForm} >
                           
                            <div className='mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input className='form-control' id='password' placeholder='Password' type='password' ref={this.password}  />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'>New Password</label>
                                <input className='form-control' id='new_password' placeholder='New Password' type='password'
                                ref={this.new_password}  />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'>Confirm New Password</label>
                                <input className='form-control' id='confirm_new_password' placeholder='Confirm New Password' type='password'
                                ref={this.confirm_new_password}  />
                            </div>
                            <div className='mb-3'>
                                <input type='submit' value='Change password' className='btn btn-danger'  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChangePasswordForm />);