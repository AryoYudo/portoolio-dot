import React from 'react';
import Header from './header';
import Footer from './footer';

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '80px' }}>
        {children}
      </div>

      <Footer />
    </>
  );
};

export default UserLayout;