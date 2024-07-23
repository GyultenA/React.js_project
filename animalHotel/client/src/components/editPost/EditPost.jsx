import { useEffect, useState } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';

import styles from './EditPost.module.css';
import { getOne, editPost } from '../../api/reviewsService';



export default function EditPost() {
    const navigate = useNavigate();
    const { reviewId } = useParams();
    const [review, setReview] = useState({
        title: '',
        username: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        getOne(reviewId)
            .then(result => {
                setReview(result)
            })
    }, [reviewId])

    const editSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData)

        const values = Object.fromEntries(formData)


        try {
            await editPost(reviewId, values);
            navigate('/reviews')
        } catch (err) {
            console.log(err)
            throw new Error('Edit is not successful ')
        }
    }

    const onChange = (e) => {
            setReview(state => ({
                ...state,
                [e.target.name]: e.target.value
            }))
    }

    return (
        <section className={styles.editpage}>
            <form id="edit" onSubmit={editSubmitHandler}>
                <div className={styles.container}>
                    <h1>Edit Review</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title"
                    value={review.title}
                    onChange={onChange} 
                    placeholder="Enter title..." />

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"
                    value={review.username}
                    onChange={onChange}
                    placeholder="Enter username..." />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" 
                    value={review.imageUrl}
                    onChange={onChange}
                    placeholder="Upload a photo..." />

                    <label htmlFor="description">POST:</label>
                    <textarea name="description" id="description"
                    value={review.description}
                    onChange={onChange}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Edit review" />
                </div>
            </form>
        </section>
    )

}