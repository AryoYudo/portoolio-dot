// layouts/UserLayout.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-5 mt-5">{children}</div>
      <Footer />
    </>
  );
};

export default UserLayout;
