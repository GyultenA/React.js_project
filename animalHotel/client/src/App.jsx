/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";

import AuthContext from './context/authContext';
import * as authService from './services/authService';
import Path from './utils/paths'

import TopBar from "./components/topBar/TopBar";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Register from "./components/register/Register"

import Team from "./components/teams/Team";
import Footer from "./components/footer/Footer"
import Reviews from './components/reviews/Reviews';
import CreatePost from './components/createPost/CreatePost';


function App() {
  const navigate = useNavigate()

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async(values) => {
    console.log(values)
    const result = await authService.login(values.email, values.password);

    console.log(result);
    setAuth(result);

    navigate(Path.Home)
  };

  const registerSubmitHandler = async(values) => {
    console.log(values);
   
    const result = await authService.register(values.username, values.email, values.password);

    setAuth(result);

    navigate(Path.Home)
}

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

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


          <Route path='/reviews/create' element={<CreatePost />} />

          <Route path='/register' element={<Register />} />

        </Routes>

        <Footer />

      </div>

    </AuthContext.Provider >

  )
}

export default App
