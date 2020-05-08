import React, { Component } from 'react';


class Login extends Component {

    render(){

        return(
            <div>
                <div className='base-container'>
                    <div className='header'>Login</div>
                    <div className='content'>
                        <div className='image'>

                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' placeholder='username'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='text' name='password' placeholder='password'/>
                        </div>
            
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn btn-primary'>
                        Login
                    </button>
                </div>
            </div>

        );
    }
}
export default Login