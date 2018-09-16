import React from 'react';
import Button from '@material-ui/core/Button'

function Form() {
   
    return(
        <form className='singup-form mdc-theme-dark'>
            <input type='text' name="firstname" placeholder="First Name"></input>
            <input type='text' name="lastname" placeholder="Last Name"></input>
            <input type='password' name="password" placeholder="Password"></input>
            <input type='email' name="email" placeholder="Email"></input>
            <button className="mdc-button mdc-button--primary mdc-button--raised">Register</button>
        </form>
    )
}

export default Form;