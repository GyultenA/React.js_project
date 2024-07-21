import styles from './CreatePost.module.css';
import { createPost } from '../../api/reviewsService';

export default function CreatePost(){
 const createPostSumbitHandler = async (e)=> {
    e.preventDefault();

    const postData = Object.fromEntries(new FormData(e.currentTarget));
       //console.log(postData)
     const result = await  createPost(postData);
     console.log(result)


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