/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../context/authContext';

import styles from './CreatePost.module.css';
import { createPost, createPosttwo } from '../../api/reviewsService';


export default function CreatePost(){
    const navigate = useNavigate();
   // const {username} = useContext(AuthContext)


 const createPostSumbitHandler = async (e)=> {
    e.preventDefault();
    const createData = new FormData(e.currentTarget);
    console.log(createData)

    const postData = Object.fromEntries(createData);
       //console.log(postData)

       try {
         await  createPosttwo(postData);
        //console.log(result)
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

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter username..." />

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