/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';

import styles from './EditPost.module.css';
import AuthContext from '../../context/authContext';
import { getOne, editPost } from '../../api/reviewsService';


export default function EditPost() {
    const navigate = useNavigate();
    const { reviewId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const { username } = useContext(AuthContext);

    const [review, setReview] = useState({
        title: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        getOne(reviewId)
            .then(result => {
                setReview(result);
            })
    }, [reviewId])

    const editSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData);
        values.username = username;

        if (!values.title || !values.imageUrl || !values.description) {
            setModalMessage("All fields are required!");
            setShowModal(true);
            return;
        }

        if (values.title.length < 8 || values.title.length > 21) {
            setModalMessage("Title should be between 7 and 20 characters long");
            setShowModal(true);
            return;
        }

        if (values.description.length < 11 || values.description.length > 251) {
            setModalMessage("Your post should be between 10 and 250 characters long");
            setShowModal(true);
            return;
        }

        const regexImage = /^https?:\/\//;

        if (!regexImage.test(values.imageUrl)) {
            setModalMessage('Invalid image URL');
            setShowModal(true);
            return;
        }


        try {
            await editPost(reviewId, values);
            navigate('/reviews');
        } catch (error) {
            setModalMessage(`Edit is not succsesful: ${error.message}`);
            setShowModal(true);
        }
    }

    const onChange = (e) => {
        setReview(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
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
        <>

            <section className={styles.editpage}>
                <form id="edit" onSubmit={editSubmitHandler}>
                    <div className={styles.container}>
                        <h1>Edit Review</h1>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title"
                            value={review.title}
                            onChange={onChange}
                            placeholder="Enter title..."
                        />


                        <label htmlFor="imageUrl">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl"
                            value={review.imageUrl}
                            onChange={onChange}
                            placeholder="Upload a photo..."

                        />

                        <label htmlFor="description">POST:</label>
                        <textarea name="description" id="description"
                            value={review.description}
                            onChange={onChange}
                        ></textarea>
                        <input className="btn submit" type="submit" value="Edit review" />
                    </div>
                </form>
                {showModal && (
                    <ErrorsMessage message={modalMessage} show={showModal} />
                )}
            </section>


        </>
    )

}