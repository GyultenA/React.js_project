/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';

import Gallery from "../gallery/Gallery";
import { useState } from 'react';


export default function Header() {
    const [show, setShowGallery] = useState(false)

  const clickHandler = () => {
         setShowGallery(true)
  } 


    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-uppercase text-dark mb-lg-4">Animal Hotel</h1>
                            <h1 className="text-uppercase text-white mb-lg-4">Make Your Pets Happy</h1>
                            <p className="fs-4 text-white mb-lg-4">We are sure the pets will enjoy a stay our hotel. We look forwarding to welcoming you.</p>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{ objectfit: "cover", height: "50px" }} />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="border-start border-5 border-primary ps-5 mb-5">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1>
                            </div>
                            <h4 className="text-body mb-4">It is our pleasure to take care of and entertain our guests during their stay with us.</h4>
                            <div className="bg-light p-4">
                                <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item w-50" role="presentation">
                                        <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                            aria-selected="true" style={{fontSize: "18px", fontWeight:"bold"}}>Our Mission</button>
                                    </li>
                                    <li className="nav-item w-50" role="presentation">
                                        <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                            aria-selected="false" style={{fontSize: "18px", fontWeight:"bold"}}>Our Vission</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                        <p className="mb-0" style={{ textAlign: "center", fontSize: "18px" }}>Traveling and can’t take your pet with you? Looking for a good dog hotel offering overnight accommodations with
                                            24/7 supervision for your dog or cat? Or a place to stay just for the day? We offer cat and dog boarding as well as cheap
                                            pet grooming so relax and enjoy your trip knowing your dog or cat is safe, secure and comfortable with us at Dogs
                                            and Cats Hotel `KEDI``. Set in a green area we have build modern facilities for yours friends.
                                            dogs and
                                            cats.</p>
                                    </div>
                                    <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                        <p className="mb-0" style={{ textAlign: "center", fontSize: "18px" }}>Motivational games and crawling sessions are of course included several times a day! ur 18 spacious apartments, with a view of the large playroom, enable seniors and shy cats to have a quiet and relaxed adjustment period. Depending on the character, we offer varied animations, such as swap ball games or foraging.he furry friends can enjoy their vacation in our three dog houses.
                                            The dogs can relax in peace and each has their own heated place to sleep. Every house is equipped with a music system,
                                            which ensures relaxation after feedings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-grid gap-2">
                
      <Button variant="primary" size="lg" onClick={clickHandler}>
        GALLERY
      </Button>
       {show && (
        <Gallery/>
       )}
    </div>

    


        </>




    )
}