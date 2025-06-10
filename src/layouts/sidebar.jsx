import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (
    <div className="col-md-2 position-fixed bg-white shadow-sm vh-100 d-flex flex-column p-3" >
      <div className="d-flex justify-content-center mb-4">
        <img src="/logo.png" alt="Tixboom Logo" className="mt-2" style={{ height: '50px' }} />
      </div>

      <ul className="nav nav-pills flex-column mb-auto w-100">
        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link fw-semibold ${isActive ? 'text-white' : 'text-dark'}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#B487F8' : 'transparent',
            })}
          >
              <img src="/projecticon.png" alt="Project Icon" style={{ height: '40px', width: '40px' }}/> Project List
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `nav-link fw-semibold ${isActive ? 'text-white' : 'text-dark'}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#B487F8' : 'transparent',
            })}
          >
            <img src="/employee_icon.png" alt="Project Icon" style={{ height: '40px', width: '40px' }}/> Employee List
          </NavLink>
        </li>
        <li className="nav-item mb-4">
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `nav-link fw-semibold ${isActive ? 'text-white' : 'text-dark'}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#B487F8' : 'transparent',
            })}
          >
            <img src="/job_icon.png" alt="Project Icon" style={{ height: '40px', width: '40px' }}/> Job Vacancy
          </NavLink>
        </li>

      </ul>

      <div className="mt-auto ms-2 w-100 mb-4">
        <div className="d-flex align-items-center justify-content-center mb-2">
          <i className="bi bi-person-circle fs-3 me-2"></i>
          <div className="fw-semibold">Admin 1</div>
        </div>
          <button
            type="button"
            className="btn w-100 fw-bold d-flex align-items-center justify-content-center"
            style={{ borderColor: '#E31F52', color: '#E31F52' }}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Log Out
          </button>
      </div>
    </div>
  );
};

export default Sidebar;
