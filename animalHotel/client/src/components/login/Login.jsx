/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../context/authContext";

import useForm from "../hook/useForm";
import styles from './Login.module.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login() {

    const {loginSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
        [LoginFormKeys.Email]:'',
        [LoginFormKeys.Password]:'',
    });

    return (
        <main className={styles.login}>
            <div className={styles.loginbox}>
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input type="email" 
                    name={LoginFormKeys.Email}
                    placeholder="Email.." 
                    onChange={onChange}
                    value={values[LoginFormKeys.Email]}
                    />
                    <label>Password</label>
                    <input type="password" 
                    name={LoginFormKeys.Password}
                    placeholder="Password.."
                    onChange={onChange}
                    value={values[LoginFormKeys.Password]}
                    />
                    <input type="submit" value="Login" />
                </form>
                <p>Do not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </main>

    )
}