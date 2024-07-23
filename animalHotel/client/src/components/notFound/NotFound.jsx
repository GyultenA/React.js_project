import styles from "./NotFound.module.css"

export default function NotFound() {

    return (
        <>
            <div className={styles['error']}>

                < h3>{'404'}</h3>
                < h3>{'Page Not Found'}</h3>


                <h4>The page you are looking for may have been removed, had its name changed, or is temporarily unavailable. Please check the URL for any spelling mistakes, or try navigating back to the homepage.</h4>




            </div>
        </>
    )
}