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
                           
                            onChange={onChange}
                            value={values[RegisterFormKeys.Username]}
                            minLength={3}
                            maxLength="50"
                        
                        />

                        <label></label>
                        <input type="text"
                            name="email"
                            placeholder="Email.."
                           
                            onChange={onChange}
                            values={values[RegisterFormKeys.Email]}
                          
                        />

                        <label></label>
                        <input type="password"
                            name="password"
                            placeholder="Password.."
                           
                            onChange={onChange}
                            value={values[RegisterFormKeys.Password]}
                           
                        />

                        <label></label>
                        <input type="password"
                            name="repass"
                            placeholder="Confirm Password.."
                         
                            onChange={onChange}
                            value={values[RegisterFormKeys.ConfirmPass]}
                            minLength={4}
                            maxLength={8}
                            
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