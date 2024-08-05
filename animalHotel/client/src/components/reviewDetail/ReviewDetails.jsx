/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import { getOne, remove } from "../../api/reviewsService";
import styles from './ReviewDetails.module.css'
import AuthContext from "../../context/authContext";



export default function ReviewDetails() {
    const navigate = useNavigate();
    const { userId, isAuthenticated } = useContext(AuthContext);
    const { reviewId } = useParams();
    const [review, setReview] = useState({});
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    useEffect(() => {
        if (reviewId) {
            getOne(reviewId)
                .then((data) => {
                    setReview(data);
                })
                .catch((error) => {
                    setModalMessage(`${error.message}`);
                    setShowModal(true);

                });
        }
    }, [reviewId]);


    const isOwner = review._ownerId === userId
    //console.log(isOwner)

    const deleteClickHandler = async () => {
        setModalMessage(`Are you sure you want to delete review "${review.title}"`);
        setShowModal(true);
    }

    const handleModalConfirm = async (isConfirm) => {
        setShowModal(false);
        if (isConfirm) {
            try {
                await remove(reviewId);
                navigate('/reviews')
            } catch (err) {
                setModalMessage(`Error: ${err.message}`);
                setShowModal(true);
            }
        }
    }

    const ErrorsMessage = ({ message, isConfirm }) => {
        return (
            <Modal show onHide={() => isConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => isConfirm(false)}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => isConfirm(true)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        )

    }



    return (
        <article className={styles.details}>
            <h3>{review?.title || 'No title available'}</h3>
            <p>Created at: {review?._createdOn ? new Date(review._createdOn).toLocaleDateString() : 'No date available'}</p>
            <p>Post by: {review.username}</p>
            <div>
                <img src={review?.imageUrl || ''} alt={review?.title || 'Image'} />
            </div>
            <p>Review: {review?.description || 'No description available'}</p>

            {isOwner && (
                <>
                    <div className={styles.buttons}>
                        <Link to={`/reviews/${reviewId}/edit`} className={styles.button}>Edit</Link>
                        <button className={styles.button} onClick={deleteClickHandler}>Delete</button>

                        {showModal && (
                            <ErrorsMessage message={modalMessage} isConfirm={handleModalConfirm} />
                        )}
                    </div>
                </>

            )}
        </article>

    );

}