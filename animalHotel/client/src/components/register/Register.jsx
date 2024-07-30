/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import AuthContext from '../../context/authContext';
import useForm from '../hook/useForm';

import styles from './Register.module.css';


const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPass: 'repass',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    // const [errors, setErrors] = useState('')



    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPass]: '',
    })



    return (

        <div >
            <div className={styles.register}>
                <h1>Register</h1>
                <h4>It is free and only takes a minute</h4>
                <form onSubmit={onSubmit}>
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        placeholder="Username.."
                        onChange={onChange}
                        value={values[RegisterFormKeys.Username]}
                    />

                    <label>Email</label>
                    <input type="text"
                        name="email"
                        placeholder="Email.."
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                    />

                    <label>Password</label>
                    <input type="password"
                        name="password"
                        placeholder="Password.."
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]}
                    />

                    <label>Confirm Password</label>
                    <input type="password"
                        name="repass"
                        placeholder="Confirm Password.."
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmPass]}
                    />





                    <input type="submit" value="Register" />
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </form>
                <div>

                </div>

            </div>

        </div>







    )
}