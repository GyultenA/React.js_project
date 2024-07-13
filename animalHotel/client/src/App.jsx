import { Routes, Route } from 'react-router-dom';

import TopBar from "./components/topBar/TopBar";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login"

import Team from "./components/teams/Team";
import Footer from "./components/footer/Footer"
import Reviews from './components/reviews/Reviews';
import CreatePost from './components/createPost/CreatePost';


function App() {


  return (
    <div>
      <TopBar />
      <Navigation />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/services" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/reviews/create' element= {<CreatePost />} />

    </Routes>




      <Footer />

    </div>
  )
}

export default App
