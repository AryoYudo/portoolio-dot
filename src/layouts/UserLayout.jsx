// UserLayout.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';

const UserLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Padding top dibuat responsive biar tidak ketutup header */}
      <main className="flex-grow-1 pt-5 mt-3 pt-md-4 pt-lg-5">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;
