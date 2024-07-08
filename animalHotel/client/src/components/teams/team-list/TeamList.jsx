

export default function TeamList(){
    return(
        <div className="team-item">
        <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src="images/team-1.jpg" alt="" />
            <div className="team-overlay">
                <div className="d-flex align-items-center justify-content-start">
                    <a className="btn btn-light btn-square mx-1" href="#">
                        <i className="bi bi-twitter" />
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                        <i className="bi bi-facebook" />
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                        <i className="bi bi-linkedin" />
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">eKATERIN</h5>
            <p className="m-0">Designation</p>
        </div>
    </div>
    )
}