import { Link } from "react-router-dom";
import styles from './Login.module.css'

export default function Login() {
    return (
        <main className={styles.login}>
            <div className={styles.loginbox}>
                <h1>Login</h1>
                <form action="#" method="">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email.." />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password.." />
                    <input type="submit" value="Login" />
                </form>
                <p>Do not have an account? <Link to="/register">Register here</Link></p>
            </div>
        </main>

    )
}