/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import AuthContext from '../../context/authContext';
import styles from './CreatePost.module.css';
import { createPosttwo } from '../../api/reviewsService';


export default function CreatePost() {
    const [reviews, setReviews] = useState({});
    const navigate = useNavigate();
    const { username } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    const createPostSumbitHandler = async (e) => {
        e.preventDefault();
        const createData = new FormData(e.currentTarget);
        const postData = Object.fromEntries(createData);
        postData.username = username;

        if (!postData.title || !postData.imageUrl || !postData.description) {
            setModalMessage("All fields are required!");
            setShowModal(true);
            return;
        }

        if (postData.title.length < 8 || postData.title.length > 21) {
            setModalMessage("Title should be between 7 and 20 characters long");
            setShowModal(true);
            return;
        }

        if (postData.description.length < 11 || postData.description.length > 251) {
            setModalMessage("Your post should be between 10 and 250 characters long");
            setShowModal(true);
            return;
        }

        const regexImage = /^https?:\/\//;

        if (!regexImage.test(postData.imageUrl)) {
            setModalMessage('Invalid image URL');
            setShowModal(true);
            return;
        }


        try {
            const result = await createPosttwo(postData);
            result.username = username;
            setReviews((state) => ({ ...state, result }));
            navigate('/reviews');

        } catch (err) {
            setModalMessage('Create a review is not successful');
            setShowModal(true);
        }

    }

    const ErrorsMessage = ({ message, show }) => {
        return (
            <Modal show={show} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <section className={styles.createpage}>
            <form id="create" onSubmit={createPostSumbitHandler}>
                <div className={styles.container}>
                    <h1>Create Post</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title"
                        name="title"
                        placeholder="Enter title..."

                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."

                    />

                    <label htmlFor="description">POST:</label>
                    <textarea name="description"
                        id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Post" />
                </div>
            </form>
            {showModal && (
                <ErrorsMessage message={modalMessage} show={showModal} />
            )}
        </section>
    )
}