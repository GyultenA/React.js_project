/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';



export default function TeamList({
  name,
  occupation,
  imageUrl,
  description,
  _id,
}) {
  
  return (
    <>


<div className="team-item" style={{width: "100%"}}>
          <div className="position-relative">
            <img className="img-fluid w-100" style={{width: "400px"}} src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                  
              <Link className="text-uppercase" style={{color:"white", fontSize: "30px"}} to={`/teams/${_id}`}>Read More</Link>


              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase" style={{fontSize: "24px"}}>{name}</h5>
            <p className="m-0" style={{fontSize:"20px"}}>{occupation}</p>
          </div>
        </div>

    </>


  )
}