/* eslint-disable no-unused-vars */
import { Routes, Route} from 'react-router-dom';


import {AuthContextProvider} from './context/authContext';


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
import TeamDetails from './components/teams/teamDetails/TeamDetails';
import Profile from './components/profile/Profile';


function App() {


  return (

    <AuthContextProvider>
      <div>
        <TopBar />
        <Navigation />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Team />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/reviews/:reviewId' element={<ReviewDetails />} />
          <Route path='/teams/:teamId' element={<TeamDetails />} />

          <Route path='/reviews/create' element={<CreatePost />} />
          <Route path='/reviews/:reviewId/edit' element={<EditPost />} />

          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/*' element={<NotFound />} />

        </Routes>

        <Footer />

      </div>

    </AuthContextProvider >

  )
}

export default App
