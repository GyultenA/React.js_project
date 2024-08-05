/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ErrorsMessage ({ errors, onClose}) {
  const [showModal, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if(onClose){
      onClose()
    }
  }

  return (
    <>
   <div className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog  onShow={() => setShow(true)} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{errors}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  );
}

