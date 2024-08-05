/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from "./ProfilePost.module.css"


import { formatDate } from '../../../lib/formatData';
import { remove } from "../../../api/reviewsService";
import { getOne } from '../../../api/reviewsService';


export default function ProfilePost({
  title,
  description,
  imageUrl,
  _createdOn,
  _id,

}) {

  const navigate = useNavigate();
  //const { reviewId } = useParams();
console.log(_id)




  const deleteClickHandler = async () => {
    const isConfirm = confirm(`Are you sure you want to delete review ${title}`);

    if (isConfirm) {
      await remove(_id);
      navigate('/reviews')
    }

  }


  return (

    <Card className={styles["card"]}>
      <Card.Img variant="top" src={imageUrl} className={styles["img-card"]}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{formatDate(_createdOn)}</small>
        <div className={styles["btn-profiler"]}>
          <Link to={`/reviews/${_id}/edit`} className={styles.btn}>Edit</Link>
          <button className={styles.btn} onClick={deleteClickHandler}>Delete</button>
        </div>
      </Card.Footer>
    </Card>


  )
}