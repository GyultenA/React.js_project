import { Routes, Route } from 'react-router-dom';

import TopBar from "./components/topBar/TopBar";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

import Team from "./components/teams/Team";
import Footer from "./components/footer/Footer"


function App() {


  return (
    <div>
      <TopBar />
      <Navigation />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/services" element={<Team />} />

    </Routes>




      <Footer />

    </div>
  )
}

export default App
