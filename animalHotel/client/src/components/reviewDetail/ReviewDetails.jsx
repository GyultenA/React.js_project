/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import AuthContext from "../../context/authContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { getOne, remove } from "../../api/reviewsService";
import styles from './ReviewDetails.module.css'
import AuthContext from "../../context/authContext";



export default function ReviewDetails() {
    const navigate = useNavigate()
    const { userId, isAuthenticated } = useContext(AuthContext)
    const { reviewId } = useParams();
    const [review, setReview] = useState({}); // Initialize with null to indicate loading state
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (reviewId) {
            getOne(reviewId)
                .then((data) => {
                    console.log('Fetched data:', data); // Log the fetched data
                    setReview(data);

                })
                .catch((error) => {
                    console.error('Error fetching review:', error);


                });
        }
    }, [reviewId]);

    console.log('Current review state:', review); // Log the current state

    console.log(review._ownerId)

    const isOwner = review._ownerId === userId
    console.log(isOwner)

    const deleteClickHandler = async ()=> {
        const isConfirm = confirm(`Are you sure you want to delete review ${review.title}`);

        if(isConfirm){
            await remove(reviewId);
            navigate('/reviews')
        }

    }


    return (
        <article className={styles.details}>
            <h3>Title: {review?.title || 'No title available'}</h3>
            <p>Created at: {review?._createdOn ? new Date(review._createdOn).toLocaleDateString() : 'No date available'}</p>
            <div>
                <img src={review?.imageUrl || ''} alt={review?.title || 'Image'} />
            </div>
            <p>Review: {review?.description || 'No description available'}</p>

            {isOwner && (
                <>
                 <div className={styles.buttons}>
                    <Link to={`/review/${reviewId}/edit`} className={styles.button}>Edit</Link>
                    <button className={styles.button} onClick={deleteClickHandler}>Delete</button>
                </div>
                </>
               
            )}
        </article>
        
    );

}