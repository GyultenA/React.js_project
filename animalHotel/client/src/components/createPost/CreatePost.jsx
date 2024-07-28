/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import AuthContext from '../../context/authContext';

import styles from './CreatePost.module.css';
import { createPost, createPosttwo } from '../../api/reviewsService';


export default function CreatePost(){
    const [reviews, setReviews] = useState({})
    const navigate = useNavigate();
   const {username} = useContext(AuthContext)


 const createPostSumbitHandler = async (e)=> {
    e.preventDefault();
    const createData = new FormData(e.currentTarget);
   

    const postData = Object.fromEntries(createData);
   console.log (postData)
   postData.username = username

       try {

        const result =  await  createPosttwo(postData);
        result.username = username
        console.log(result)
        setReviews((state) => ({...state, result}))
        navigate('/reviews')
        
       } catch (err) {
           console.log(err);
           throw new Error('Create a review is not successful ')
       }
    


 }

    return(
        <section  className={styles.createpage}>
        <form id="create" onSubmit={createPostSumbitHandler}>
            <div className={styles.container}>
                <h1>Create Post</h1>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter title..." />

               {/**<label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"  /> */} 

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="description">POST:</label>
                <textarea name="description" id="description"></textarea>
                <input className="btn submit" type="submit" value="Create Post" />
            </div>
        </form>
    </section>
    )
}