/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from './Login.module.css';
import AuthContext from "../../context/authContext";
import useForm from "../hook/useForm";
import Errors from '../errors/Errors';



export default function Login() {

    const { loginSubmitHandler, errorsHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    });

   
    return (
        <>
            <main className={styles.login}>
                <section className={styles.loginbox}>
                    <div className={styles.loginSection}>
                        <h1>SIGN IN</h1>
                        <form onSubmit={onSubmit}>

                            <label>Email</label>
                            <input className={styles.inputFields} type="email"
                                name="email"
                                placeholder="Email.."
                                onChange={onChange}
                                value={values.email}

                            />


                            <label>Password</label>
                            <input className={styles.inputFields} type="password"
                                name="password"
                                placeholder="Password.."
                                onChange={onChange}
                                value={values.password}

                            />

                            <input type="submit" value="Login" />
                        </form>
                        <p className={styles["message"]}>Do not have an account? <Link to="/register" className={styles.link}>Register here</Link></p>
                    </div>
                </section>
                {errorsHandler && < Errors error={errorsHandler} />}
            </main>

        </>
    )
}