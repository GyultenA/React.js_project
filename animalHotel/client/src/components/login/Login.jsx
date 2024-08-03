/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../context/authContext";
import useForm from "../hook/useForm";
import styles from './Login.module.css';
import Errors from "../errors/Errors";


export default function Login() {

    const {loginSubmitHandler, errorsHandler, clearErrors} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
        email:'',
        password:'',
    });

   

    return (
        <>
      
        <main className={styles.login}>
            <div className={styles.loginbox}>
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input type="email" 
                    name="email"
                    placeholder="Email.." 
                    onChange={onChange}
                    value={values.email}
                    required
                    onFocus={clearErrors}
                    />
                    <label>Password</label>
                    <input type="password" 
                    name="password"
                    placeholder="Password.."
                    onChange={onChange}
                    value={values.password}
                    required
                    onFocus={clearErrors}
                    />
                  
                    <input type="submit" value="Login" />
                </form>
                <p>Do not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </main>

        {errorsHandler && <Errors error= { errorsHandler} />}
  </>
    )
}