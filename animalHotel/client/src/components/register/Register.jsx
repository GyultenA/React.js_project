import styles from './Register.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <main className={styles.register}>
              
        <div className={styles.registerbox}>
            <h1>Register</h1>
            <h4>It is free and only takes a minute</h4>
            <form action="#" method="">
                <label>Username</label>
                <input type="text" name="" placeholder="Username.."/>
                <label>Email</label>
                <input type="text" name="" placeholder="Email.."/>
                <label>Password</label>
                <input type="password" name="" placeholder="Password.."/>
                <label>Confirm Password</label>
                <input type="password" name="" placeholder="Confirm Password.."/>
                <input type="submit" value="Register"/>
            </form>
            <p>Already have an account? <Link to="#">Login here</Link></p>
        </div>
    </main>
 )
}