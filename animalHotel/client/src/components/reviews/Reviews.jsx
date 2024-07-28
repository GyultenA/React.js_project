/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import styles from "./Reviews.module.css"
import { useEffect } from "react";

//import {get } from '../../lib/request'
import ReviewItem from "./reviewItem/ReviewItem";
import * as reviewsService from '../../api/reviewsService'
import AuthContext from "../../context/authContext";

export default function Reviews() {
  const { isAuthenticated } = useContext(AuthContext)
  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    reviewsService.getAll()
      .then(result => setReviews(result))
  }, [])


  return (

    <div className="container py-5">
      <div className="row g-5">
        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
          Recent Post
        </h3>
        {/* Blog list Start */}
        <div className="col-lg-8">

          {reviews.map(review => <ReviewItem key={review._id} {...review} />)}

          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-lg m-0">
                <li className="page-item disabled">
                  <Link className="page-link rounded-0" to="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="bi bi-arrow-left" />
                    </span>
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link rounded-0" to="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="bi bi-arrow-right" />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Blog list End */}
        {/* Sidebar Start */}
        <div className="col-lg-4">
          {/* Search Form Start */}
          <div className="mb-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Keyword"
              />
              <button className="btn btn-primary px-4">
                <i className="bi bi-search" />
              </button>
            </div>
          </div>
          {/* Search Form End */}
          {isAuthenticated && (
            <Link to="create" className={styles.button}>Create post
            </Link>
          )}





        </div>
        {/* Sidebar End */}
      </div>
    </div>
  )
}