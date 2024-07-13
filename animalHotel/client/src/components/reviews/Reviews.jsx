import {Link, Outlet} from "react-router-dom";
import styles from "./Reviews.module.css"

export default function Reviews(){
    return(
        
        <div className="container py-5">
  <div className="row g-5">
  <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
          Recent Post
        </h3>
    {/* Blog list Start */}
    <div className="col-lg-8">
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src="img/blog-1.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="bi bi-bookmarks me-2" />
                  Web Design
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                Dolor sit magna rebum clita rebum dolor
              </h5>
              <p>
                Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                stet tempor eos dolor
              </p>
              <a className="text-primary text-uppercase" href="">
                Read More
                <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src="img/blog-2.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="bi bi-bookmarks me-2" />
                  Web Design
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                Dolor sit magna rebum clita rebum dolor
              </h5>
              <p>
                Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                stet tempor eos dolor
              </p>
              <Link className="text-primary text-uppercase" to="">
                Read More
                <i className="bi bi-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src="img/blog-1.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="bi bi-bookmarks me-2" />
                  Web Design
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                Dolor sit magna rebum clita rebum dolor
              </h5>
              <p>
                Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                stet tempor eos dolor
              </p>
              <a className="text-primary text-uppercase" href="">
                Read More
                <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src="img/blog-2.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="bi bi-bookmarks me-2" />
                  Web Design
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                Dolor sit magna rebum clita rebum dolor
              </h5>
              <p>
                Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                stet tempor eos dolor
              </p>
              <a className="text-primary text-uppercase" href="">
                Read More
                <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src="img/blog-1.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="bi bi-bookmarks me-2" />
                  Web Design
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                Dolor sit magna rebum clita rebum dolor
              </h5>
              <p>
                Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                stet tempor eos dolor
              </p>
              <a className="text-primary text-uppercase" href="">
                Read More
                <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-item mb-5">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img
              className="img-fluid h-100"
              src="img/blog-2.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="bi bi-bookmarks me-2" />
                  Web Design
                </small>
                <small>
                  <i className="bi bi-calendar-date me-2" />
                  01 Jan, 2045
                </small>
              </div>
              <h5 className="text-uppercase mb-3">
                Dolor sit magna rebum clita rebum dolor
              </h5>
              <p>
                Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                stet tempor eos dolor
              </p>
              <a className="text-primary text-uppercase" href="">
                Read More
                <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg m-0">
            <li className="page-item disabled">
              <a className="page-link rounded-0" href="#" aria-label="Previous">
                <span aria-hidden="true">
                  <i className="bi bi-arrow-left" />
                </span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link rounded-0" href="#" aria-label="Next">
                <span aria-hidden="true">
                  <i className="bi bi-arrow-right" />
                </span>
              </a>
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
    
     <Link to="create" className={styles.button}>Create post
     </Link>
     <Outlet />
   
     
    </div>
    {/* Sidebar End */}
  </div>
</div>
    )
}