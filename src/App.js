import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

import Beranda from './components/Beranda';
import About from './components/About';
import Project from './components/project/ProjectGrid';
import TeamCulture from './components/Team';
import DetailProject from './components/project/DetailProject';
import Lowongan from './pages/lowongan/Lowongan';
import DetailLowongan from './pages/lowongan/DetailLowongan';
import LoginAdmin from './pages/admin/auth/LoginAdmin';
import ProjectList from './pages/admin/project/Project';
import EmployeeList from './pages/admin/employee/Employee';
import JobVacancy from './pages/admin/vacancy/JobVacancy';
import ApplicantList from './pages/admin/vacancy/Applicants';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Pages */}
        <Route path="/" element={ <UserLayout> <> <Beranda /> <About /> <Project /> <TeamCulture /> </> </UserLayout> } />
        <Route path="/detailproject" element={ <UserLayout> <DetailProject /> </UserLayout> } />
        <Route path="/lowongan" element={ <UserLayout> <Lowongan /> </UserLayout> } />
        <Route path="/detaillowongan" element={ <UserLayout> <DetailLowongan /> </UserLayout> } />

        {/* Admin Pages */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin" element={ <AdminLayout> <div>Dashboard Admin (Contoh)</div> </AdminLayout> } />
        <Route path="/project" element={ <ProjectList> </ProjectList> } />
        <Route path="/employee" element={ <EmployeeList> </EmployeeList> } />
        <Route path="/jobvacancy" element={ <JobVacancy> </JobVacancy> } />
        <Route path="/applicantlist" element={ <ApplicantList> </ApplicantList> } />
      </Routes>
    </Router>
  );
}

export default App;
