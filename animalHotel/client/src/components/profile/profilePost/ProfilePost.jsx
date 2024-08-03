/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams, Link } from "react-router-dom";
//import { useContext } from 'react';
import styles from "./ProfilePost.module.css"


import { formatDate } from '../../../lib/formatData';
import { remove } from "../../../api/reviewsService";
//import { AuthContext } from '../../../context/authContext';


export default function ProfilePost({
  title,
  description,
  imageUrl,
  _createdOn,

}) {

  const navigate = useNavigate();
  const { reviewId } = useParams();
  //const { userId } = useContext(AuthContext);



  const deleteClickHandler = async () => {
    const isConfirm = confirm(`Are you sure you want to delete review ${title}`);

    if (isConfirm) {
      await remove(reviewId);
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
          <Link to={`/reviews/${reviewId}/edit`} className={styles.btn}>Edit</Link>
          <button className={styles.btn} onClick={deleteClickHandler}>Delete</button>
        </div>
      </Card.Footer>
    </Card>


  )
}