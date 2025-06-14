import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';

const Sidebar = () => {
  const [openJobMenu, setOpenJobMenu] = useState(false);
  return (
    <div className="col-md-2 position-fixed bg-white shadow-sm vh-100 d-flex flex-column p-3" >
      <div className="d-flex justify-content-center mb-4">
        <img src="/logo.png" alt="Tixboom Logo" className="mt-2" style={{ height: '50px' }} />
      </div>

      <ul className="nav nav-pills flex-column mb-auto w-100">
        <li className="nav-item mb-2">
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `nav-link fw-semibold ${isActive ? 'text-dark' : 'text-dark'}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#F4F4F4' : 'transparent',
            })}
          >
              <img src="/projecticon.png" alt="Project Icon" style={{ height: '40px', width: '40px' }}/> Project List
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink
            to="/employee"
            className={({ isActive }) =>
              `nav-link fw-semibold ${isActive ? 'text-dark' : 'text-dark'}`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#F4F4F4' : 'transparent',
            })}
          >
            <img src="/employee_icon.png" alt="Project Icon" style={{ height: '40px', width: '40px' }}/> Employee List
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <div
            className="nav-link fw-semibold text-dark d-flex justify-content-between align-items-center"
            style={{ cursor: 'pointer', backgroundColor: openJobMenu ? '#F4F4F4' : 'transparent' }}
          >
            <div className="d-flex align-items-center">
              <img src="/job_icon.png" alt="Project Icon" style={{ height: '40px', width: '40px', marginRight: 8 }} />
              Job Vacancy
            </div>
            <i
              className={`bi ${openJobMenu ? 'bi-chevron-up' : 'bi-chevron-down'}`}
              onClick={(e) => {
                e.stopPropagation(); // Hindari bubble ke parent
                setOpenJobMenu(!openJobMenu);
              }}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>

          <Collapse in={openJobMenu}>
            <ul className="list-unstyled ps-4 mt-2">
              <li className="nav-item mb-2">
                <NavLink
                  to="/jobvacancy"
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'text-dark' : 'text-dark'}`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#F4F4F4' : 'transparent',
                    borderRadius: 8
                  })}
                >
                  <i className="bi bi-briefcase me-2"></i> Job Vacancy
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/applicantlist"
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'text-dark' : 'text-dark'}`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#F4F4F4' : 'transparent',
                    borderRadius: 8
                  })}
                >
                  <i className="bi bi-people me-2"></i> Applicant
                </NavLink>
              </li>
            </ul>
          </Collapse>
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
