// layouts/AdminLayout.jsx
import React from 'react';
import Sidebar from './sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout d-flex">
      <Sidebar />
      <div className="admin-content p-3 w-100">{children}</div>
    </div>
  );
};

export default AdminLayout;
