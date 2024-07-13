import styles from './CreatePost.module.css'

export default function CreatePost(){
    return(
        <section  className={styles.createpage}>
        <form id="create" >
            <div className={styles.container}>
                <h1>Create Post</h1>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter title..." />

                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name" placeholder="Enter username..." />

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