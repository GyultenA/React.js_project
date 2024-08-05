/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';

import styles from "./ProfilePost.module.css"
import { formatDate } from '../../../lib/formatData';
import { remove } from "../../../api/reviewsService";


export default function ProfilePost({
  title,
  description,
  imageUrl,
  _createdOn,
  _id,

}) {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


  const deleteClickHandler = async () => {
    setModalMessage(`Are you sure you want to delete review "${title}"`);
    setShowModal(true);
  }

  const handleModalConfirm = async (isConfirm) => {
    setShowModal(false);
    if (isConfirm) {
      try {
        await remove(_id);
        navigate('/reviews');
      } catch (err) {
        setModalMessage(`Error: ${err.message}`);
        setShowModal(true);
      }
    }
  }

  const ErrorsMessage = ({ message, isConfirm }) => {

    return (
      <Modal show onHide={() => isConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => isConfirm(false)}>
            No
          </Button>
          <Button variant="primary" onClick={() => isConfirm(true)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }


  return (

    <Card className={styles["card"]}>
      <Card.Img variant="top" src={imageUrl} className={styles["img-card"]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{formatDate(_createdOn)}</small>
        <div className={styles["btn-profiler"]}>
          <Link to={`/reviews/${_id}/edit`} className={styles.btn}>Edit</Link>
          <button className={styles.btn} onClick={deleteClickHandler}>Delete</button>

          {showModal && (
            <ErrorsMessage message={modalMessage} isConfirm={handleModalConfirm} />
          )}
        </div>
      </Card.Footer>
    </Card>


  )
}