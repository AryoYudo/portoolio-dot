// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header.jsx'; 
import Beranda from './components/Beranda.jsx'; 
import About from './components/About.jsx'; 

function App() {
  return (
    <div className="App">
      <div className="fixed-top"> {/* Tambahkan kelas Bootstrap fixed-top */}
        <Header />
      </div>
      <div className="pt-5 mt-5"> {/* Menambahkan padding-top untuk konten utama */}
        <Beranda />
      </div>
      <div className="pt-5 mt-5"> {/* Menambahkan padding-top untuk konten utama */}
        <About />
      </div>
    </div>
  );
}

export default App;
