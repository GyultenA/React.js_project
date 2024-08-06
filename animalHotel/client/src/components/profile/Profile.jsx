/* eslint-disable no-unused-vars */
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup';

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AuthContext from '../../context/authContext';
import styles from "./Profile.module.css";
import ProfilePost from './profilePost/ProfilePost';
import { getUserPosts } from '../../api/reviewsService';


export default function Profile() {

    const { username, email, userId } = useContext(AuthContext);
    //console.log(userId)
    const [userReviews, setUserReviews] = useState([]);
    const { reviewId } = useParams();
  

    useEffect(() => {
        getUserPosts(userId)
            .then(result => setUserReviews(result))
    }, [userId]);

  

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
                    <Accordion.Header>My Posts</Accordion.Header>
                    <Accordion.Body>
                    <CardGroup >
                        {userReviews.length > 0
                            ? userReviews.map(item => <ProfilePost key={item._id} {...item} />)
                            : <p>You do not have posts yet</p>
                        }
                           </CardGroup>


                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>

    )
}