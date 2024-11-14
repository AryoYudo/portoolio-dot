// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/header.jsx'; 
import Beranda from './components/Beranda.jsx'; 

function App() {
  return (
    <div className="App">
      <div className="fixed-top"> {/* Tambahkan kelas Bootstrap fixed-top */}
        <Header />
      </div>
      <div className="pt-5 mt-5"> {/* Menambahkan padding-top untuk konten utama */}
        <Beranda />
      </div>
    </div>
  );
}

export default App;
