import React, { Component } from 'react';


class Register extends Component {

    render(){

        return(
            <div>
                <div className='base-container'>
                    {/* <div className='header'><h3> Register </h3></div> */}
                    <div className='content'>
                        <div className='image'>

                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Username :</label>
                            <input type='text' name='username' placeholder='username'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'> Email : </label> 
                            <input type='email' name='email' placeholder='email'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password :</label>
                            <input type='text' name='password' placeholder='password'/>
                        </div>
            
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn btn-primary'>
                        Register
                    </button>
                </div>
            </div>

        );
    }
}
export default Register