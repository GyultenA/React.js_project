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
     
      
 

      
      

    {/**<div
        className="owl-item active"
        style={{ width: 284, marginRight: 45 }}
      >
        <div className="team-item">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">

              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{occupation}</p>
          </div>
        </div>
        </div>


        <div
        className="owl-item cloned"
        style={{ width: 284, marginRight: 45 }}
      >
        <div className="team-item">
          <div className="position-relative">
            <img className="img-fluid w-100" src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">

              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{occupation}</p>
          </div>
        </div>
      </div>

      <div
        className="owl-item active"
        style={{ width: 284, marginRight: 45 }}
      >
        <div className="team-item">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">

              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{occupation}</p>
          </div>
        </div>
        </div>
 */}  
   

      {/**    <div
        className="owl-item cloned"
        style={{ width: 284, marginRight: 45 }}
      >
        <div className="team-item">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">

              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{occupation}</p>
          </div>
        </div>
      </div>
         <div
        className="owl-item cloned"
        style={{ width: 284, marginRight: 45 }}
      >
        <div className="team-item">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">

              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{occupation}</p>
          </div>
        </div>
      </div> 

      <div
        className="owl-item active"
        style={{ width: 284, marginRight: 45 }}
      >
        <div className="team-item">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid w-100" src={imageUrl} alt={name} />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">

              </div>
            </div>
          </div>
          <div className="bg-light text-center p-4">
            <h5 className="text-uppercase">{name}</h5>
            <p className="m-0">{occupation}</p>
          </div>
        </div>
      </div>
       */}
    


    </>


  )
}