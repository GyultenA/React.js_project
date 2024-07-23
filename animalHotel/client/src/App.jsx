/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";

import AuthContext from './context/authContext';
import * as authService from './api/authService';
import Path from './utils/paths'

import TopBar from "./components/topBar/TopBar";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";

import Team from "./components/teams/Team";
import Footer from "./components/footer/Footer"
import Reviews from './components/reviews/Reviews';
import CreatePost from './components/createPost/CreatePost';
import ReviewDetails from './components/reviewDetail/ReviewDetails';
import NotFound from './components/notFound/NotFound';
import EditPost from './components/editPost/EditPost';


function App() {
  const navigate = useNavigate()

  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async(values) => {
    console.log(values)
    const result = await authService.login(values.email, values.password);

    console.log(result);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home)
  };

  const registerSubmitHandler = async(values) => {
    //console.log(values);
   
    const result = await authService.registerNew(values.username, values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home)
};

const logoutHandler =()=> {
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
 // console.log(values)

  return (

    <AuthContext.Provider value={values}>
      <div>
        <TopBar />
        <Navigation />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/reviews/:reviewId' element={<ReviewDetails />} />


          <Route path='/reviews/create' element={<CreatePost />} />
          <Route path='/reviews/:reviewId/edit' element= {<EditPost />} />

          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/*' element={<NotFound />} />

        </Routes>

        <Footer />

      </div>

    </AuthContext.Provider >

  )
}

export default App
