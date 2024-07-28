import Accordion from 'react-bootstrap/Accordion';
import styles from "./Profile.module.css"
import ProfilePost from './profilePost/ProfilePost';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';



export default function Profile() {

    const {username, email} = useContext(AuthContext)

    return (
        <>
            <Accordion defaultActiveKey={['0']} alwaysOpen className={styles.main}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My profile</Accordion.Header>
                    <Accordion.Body>
                       <p>Name: {username}</p>
                       <p>Email: {email}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>My reviews</Accordion.Header>
                    <Accordion.Body>
                        <ProfilePost />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>

    )
}