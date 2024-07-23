/* eslint-disable react/prop-types */
//import { useContext } from "react"
import { Link } from "react-router-dom"
import { formatDate} from "../../../lib/formatData"
//import AuthContext from "../../../context/authContext"

export default function ReviewItem ({
    title,
  
    description,
    imageUrl,
    _createdOn,
    _id,

}) 

{
  

    return (
<div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src={imageUrl}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                 {/**} */} <i className="bi bi-bookmarks me-2" />
                {}
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
               {formatDate(_createdOn)}
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                {title}
              </h5>
              <p>
                {description}
              </p>
              <Link className="text-primary text-uppercase" to={`/reviews/${_id}`}>
                Read More
                <i className="bi bi-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )

}