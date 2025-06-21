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
import DetailPerProject from './pages/project/DetailPerProject';
import ProjectPerList from './pages/project/Project';
import BerandaCore from './pages/beranda/BerandaCore';

// ✅ Import DOT AI Chat Component
import DotAIChatWidget from './components/ai/DotAIChatWidget';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Pages */}
        <Route path="/" element={ <UserLayout> <> <Beranda /> <About /> <Project /> <TeamCulture /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/beranda" element={ <UserLayout> <> <BerandaCore /> </> </UserLayout> } />
        <Route path="/detailproject" element={ <UserLayout> <> <DetailProject /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/projectlist" element={ <UserLayout> <> <ProjectPerList /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/detail_per_project" element={ <UserLayout> <> <DetailPerProject /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/lowongan" element={ <UserLayout> <> <Lowongan /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/detailLowongan/:uuid" element={ <UserLayout> <> <DetailLowongan /> <DotAIChatWidget /> </> </UserLayout> } />

        {/* Admin Pages (tanpa DOT AI Chat) */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin" element={<AdminLayout> <div>Dashboard Admin (Contoh)</div> </AdminLayout>} />
        <Route path="/project" element={<ProjectList />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/jobvacancy" element={<JobVacancy />} />
        <Route path="/applicantlist" element={<ApplicantList />} />
      </Routes>
    </Router>
  );
}

export default App;