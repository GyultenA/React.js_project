import {Link} from "react-router-dom"

export default function Navigation(){
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="index.html" className="navbar-brand ms-lg-5">
            <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/services" className="nav-item nav-link">Services</Link>
                <Link to="/reviews" className="nav-item nav-link">Reviews</Link>
                <Link to="/profile" className="nav-item nav-link">My profile</Link>
                <Link to="/login" className="nav-item nav-link">Login</Link>
                <Link to="/register" className="nav-item nav-link">Register</Link>
                <Link to="/logout" className="nav-item nav-link">Logout</Link>
             
                <Link to="contact.html" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i className="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    </nav>
    )
}