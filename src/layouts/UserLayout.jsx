// UserLayout.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';

const UserLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Flexbox full height layout */}
      <Header />

      <main className="flex-grow-1" style={{ paddingTop: '80px' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;
