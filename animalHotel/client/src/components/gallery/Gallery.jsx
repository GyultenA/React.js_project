import { Link } from "react-router-dom";
import styles from './Gallery.module.css'

export default function Gallery() {

    return (
        <>
            <div className={styles["container"]}>
                <section className={styles["cats-hotel-description"]}>
                    <Link to="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" ></Link>
                    <div className={styles["cards"]}>
                        <div className={styles["card"]}>
                            <h2 className={styles["card-title"]}>Play</h2>
                            <img src="https://th.bing.com/th/id/R.7bcd8edc9f1038a1b6af1a8588e7ee82?rik=we9CfwEaNY0cUg&pid=ImgRaw&r=0" alt="" />
                            <p className={styles["card-desc"]}>Motivational games and crawling sessions are of course included several times a day!</p>
                        </div>
                        <div className={styles["card"]}>
                            <h2 className={styles["card-title"]}>Garden</h2>
                            <img src="https://i.pinimg.com/736x/c3/2c/35/c32c35b702c114e14cd976a9d7a57e0f--google-search.jpg" alt="" />
                            <p className={styles["card-desc"]}>The adjacent 80 sqm garden is another highlight for the cats. There you can have fun and play extensively!</p>
                        </div>
                        <div className={styles["card"]}>
                            <h2 className={styles["card-title"]}>Pool games</h2>
                            <img src="https://i.pinimg.com/originals/ff/7f/c2/ff7fc2645c4e137d9f5b962281ab8031.jpg" alt="" />
                            <p className={styles["card-desc"]}>You can have fun with your holiday acquaintances on the playgrounds and in the summer you can cool off in the dog pool.</p>
                        </div>
                        <div className={styles["card"]}>
                            <h2 className={styles["card-title"]}>Play</h2>
                            <img src="https://www.petpalaceresort.com/wp-content/uploads/2012/04/24081-900x600.jpg" alt="" />
                            <p className={styles["card-desc"]}>Depending on the character, we offer varied animations, such as swap ball games or foraging.</p>
                        </div>
                        <div className={styles["card"]}>
                            <h2 className={styles["card-title"]}>Great time</h2>
                            <img src="https://blog.franconnect.com/hs-fs/hubfs/Imported_Blog_Media/1566e4c25ae785396b02f95376310f8a7654.jpg?width=1280&height=720&name=1566e4c25ae785396b02f95376310f8a7654.jpg" alt="" />
                            <p className={styles["card-desc"]}>Of course, cuddles are not neglected either!</p>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}