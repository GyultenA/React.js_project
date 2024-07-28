/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../api/authService';
import Path from '../utils/paths'

 const AuthContext = createContext();


 export function AuthContextProvider (props){

    const navigate = useNavigate()

    const [auth, setAuth] = useState(() => {
      localStorage.removeItem('accessToken');
      return {};
    });

    const loginSubmitHandler = async (values) => {
        // console.log(values)
         const result = await authService.login(values.email, values.password);
     
         console.log(result);
         setAuth(result);
         localStorage.setItem('accessToken', result.accessToken);
     
         navigate(Path.Home)
       };

       const registerSubmitHandler = async (values) => {
        // console.log(values);
     
         if (values.password !== values.repass) {
           throw new Error('Passwords do not match')
         }
     
         try {
           const result = await authService.registerNew(values.username, values.email, values.password);
     
           setAuth(result);
           localStorage.setItem('accessToken', result.accessToken);
           navigate(Path.Home)
         } catch (err) {
           console.log(err.message)
         }
     
       };

       
  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
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

    return(
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
 }

AuthContext.displayName= "AuthContext";

 export default AuthContext