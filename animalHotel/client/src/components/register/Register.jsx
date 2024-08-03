/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Link } from 'react-router-dom';
import { useContext} from 'react';

import AuthContext from '../../context/authContext';
import useForm from '../hook/useForm';
import styles from './Register.module.css';
import Errors from '../errors/Errors';


const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPass: 'repass',
}

export default function Register() {
    const { registerSubmitHandler, errorsHandler, clearErrors } = useContext(AuthContext);



    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPass]: '',
    })



    return (
        <>

            <div >
                <div className={styles.register}>
                    <h1>Register</h1>
                    <h4>It is free and only takes a minute</h4>
                    <form onSubmit={onSubmit}>
                        <label></label>
                        <input type="text"
                            name="username"
                            placeholder="Your name.."
                            onFocus={clearErrors}
                            onChange={onChange}
                            value={values[RegisterFormKeys.Username]}
                            minLength={3}
                            maxLength="50"
                            required
                        />

                        <label></label>
                        <input type="text"
                            name="email"
                            placeholder="Email.."
                            onFocus={clearErrors}
                            onChange={onChange}
                            values={values[RegisterFormKeys.Email]}
                            required
                        />

                        <label></label>
                        <input type="password"
                            name="password"
                            placeholder="Password.."
                            onFocus={clearErrors}
                            onChange={onChange}
                            value={values[RegisterFormKeys.Password]}
                            required
                        />

                        <label></label>
                        <input type="password"
                            name="repass"
                            placeholder="Confirm Password.."
                            onFocus={clearErrors}
                            onChange={onChange}
                            value={values[RegisterFormKeys.ConfirmPass]}
                            minLength={4}
                            maxLength={8}
                            required
                        />

                        <input type="submit" value="Register" />
                        <p>Already have an account? <Link to="/login" style={{fontWeight: "bold"}}>Login here</Link></p>
                    </form>
                    <div>

                    </div>

                </div>

            </div>
            {errorsHandler && < Errors error={errorsHandler} />}

        </>





    )
}