import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router
import Header from './layouts/header.jsx'; 
import Footer from './layouts/footer.jsx'; 
import Beranda from './components/Beranda.jsx'; 
import About from './components/About.jsx'; 
import Project from './components/project/ProjectGrid.jsx'; 
import TeamCulture from './components/Team.jsx'; 
import DetailProject from './components/project/DetailProject'; 

function App() {
  return (
    <Router> {/* Bungkus semua dalam Router */}
      <div className="App">
        <div className="fixed-top">
          <Header />
        </div>
        <div className="pt-5 mt-5">
          <Beranda />
        </div>
        <div className="pt-5 mt-5">
          <About />
        </div>
        <div className="pt-5 mt-5">
          <Project />
        </div>
        <div className="pt-5 mt-5">
          <TeamCulture />
        </div>
        <Routes>
          <Route path="/detailproject" element={<DetailProject />} />
        </Routes>
        <div className="bottom">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
