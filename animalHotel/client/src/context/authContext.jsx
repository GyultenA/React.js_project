/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../api/authService';
import Path from '../utils/paths';

const AuthContext = createContext();


export function AuthContextProvider(props) {

  const navigate = useNavigate();
  const [errorsHandler, setErrors] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {

    try {
      const result = await authService.login(values.email, values.password);

    //  if (!result.email || !result.password) {
       // setModalMessage("All fields are riquired!");
       // setShowModal(true);
       // return;
    //  }

      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
    } catch (error) {
      setModalMessage(`Message: ${error.message}`);
      setShowModal(true);
    }

  };

  const registerSubmitHandler = async (values) => {
  
    try {

      if (values.password !== values.repass) {
        setModalMessage('Passwords do not match');
        setShowModal(true);
        return;
      }

      if (values.password.length < 2 || values.password.length > 9) {
        setModalMessage('Password should be between 2 and 8 characters long');
        setShowModal(true);
        return;
      }

     if (!values.username || !values.email) {
      setModalMessage('All fields are required');
       setShowModal(true);
      return;
     }

      if (values.username.length < 5) {
        setModalMessage('Your name should be at least 4 characters long');
        setShowModal(true);
        return;
      }

      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!regexEmail.test(values.email)) {
        setModalMessage('Invalid email!');
        setShowModal(true);
        return;
      }


      const result = await authService.registerNew(values.username, values.email, values.password);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
      setErrors(null)
    } catch (err) {
      setModalMessage(`Message: ${err.message}`);
      setShowModal(true);
    }

  };


  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }


  const ErrorsMessage = ({ message, show }) => {

    return (
      <Modal show={show} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    userId: auth._id,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
      {showModal && (
        <ErrorsMessage message={modalMessage} show={showModal} />
      )}
    </AuthContext.Provider>
  )
}

AuthContext.displayName = "AuthContext";

export default AuthContext

