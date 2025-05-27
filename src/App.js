import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/header.jsx'; 
import Footer from './layouts/footer.jsx'; 
import Beranda from './components/Beranda.jsx'; 
import About from './components/About.jsx'; 
import Project from './components/project/ProjectGrid.jsx'; 
import TeamCulture from './components/Team.jsx'; 
import DetailProject from './components/project/DetailProject'; 
import Lowongan from './pages/lowongan/Lowongan.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed-top">
          <Header />
        </div>

        <div className="pt-5 mt-5">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Beranda />
                  <About />
                  <Project />
                  <TeamCulture />
                </>
              }
            />
            <Route path="/detailproject" element={<DetailProject />} />
            <Route path="/lowongan" element={<Lowongan />} />
          </Routes>
        </div>

        <div className="bottom">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
