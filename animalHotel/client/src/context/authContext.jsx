/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../api/authService';
import Path from '../utils/paths';

const AuthContext = createContext();


export function AuthContextProvider(props) {

  const navigate = useNavigate();
  const [errorsHandler, setErrors] = useState(null)

  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    // console.log(values)

    try {
      const result = await authService.login(values.email, values.password);

      if (result.email == "" || result.password == "") {
        setErrors("All fields are riquired!")
      }

      //console.log(result);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
    } catch (error) {
      setErrors(error.message);
    }

  };

  const registerSubmitHandler = async (values) => {
    // console.log(values);
    try {

      if (values.password !== values.repass) {
        setErrors('Passwords do not match');
        return
      }

      const result = await authService.registerNew(values.username, values.email, values.password);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home);
      setErrors(null)
    } catch (err) {
      console.log(err.message);
      setErrors(err.message)
    }

  };


  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }

  const clearErrors = () => {
    setErrors(null)
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    errorsHandler,
    clearErrors,
    userId: auth._id,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}

AuthContext.displayName = "AuthContext";

export default AuthContext