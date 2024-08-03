import styles from './Food.module.css'

export default function Food() {
    return (
        <div className="container-fluid py-5">
            <div className={styles["container"]}>
                <div
                    className="border-start border-5 border-primary ps-5 mb-5"
                    style={{ maxWidth: 600 }}
                >
                    <h6 className="text-primary text-uppercase">Products</h6>
                    <h1 className="display-5 text-uppercase mb-0">
                        Our Partners
                    </h1>
                    <div className={styles["flex-card"]}>
                    <div className={styles["pb-5"]}>
                        <div className="product-item position-relative bg-light d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src="img/prod1.jpg" alt="" />

                        </div>
                    </div>
                    <div className={styles["pb-5"]}>
                        <div className="product-item position-relative bg-light d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src="img/prod2.jpg" alt="" />

                            <div className="btn-action d-flex justify-content-center">

                            </div>
                        </div>
                    </div>
                    <div className={styles["pb-5"]}>
                        <div className="product-item position-relative bg-light d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src="img/prod4.jpg" alt="" />

                            <div className="btn-action d-flex justify-content-center">

                            </div>
                        </div>
                    </div>
                    <div className={styles["pb-5"]}>
                        <div className="product-item position-relative bg-light d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src="img/prod5.jpg" alt="" />

                            <div className="btn-action d-flex justify-content-center">

                            </div>
                        </div>
                    </div>

                    <div className={styles["pb-5"]}>
                        <div className="product-item position-relative bg-light d-flex flex-column text-center">
                            <img className="img-fluid mb-4" src="img/prod6.jpeg" alt="" />

                            <div className="btn-action d-flex justify-content-center">

                            </div>
                        </div>
                    </div>

                    </div>
                  
                </div>
            </div>
            <div className="owl-carousel product-carousel">

            </div>
        </div>

    )
}