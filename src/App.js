import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

import Lowongan from './pages/lowongan/Lowongan';
import DetailLowongan from './pages/lowongan/DetailLowongan';
import LoginAdmin from './pages/admin/auth/LoginAdmin';
import ProjectList from './pages/admin/project/Project';
import EmployeeList from './pages/admin/employee/Employee';
import JobVacancy from './pages/admin/vacancy/JobVacancy';
import ApplicantList from './pages/admin/vacancy/Applicants';
import DetailPerProject from './pages/project/DetailPerProject';
import ProjectPerList from './pages/project/Project';
import Beranda from './pages/beranda/Beranda';
import PrivateRoute from './routes/PrivateRoute';

// ✅ Import DOT AI Chat Component
import DotAIChatWidget from './components/ai/DotAIChatWidget';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Pages */}
        {/* <Route path="/" element={ <UserLayout> <> <Beranda /> <About /> <Project /> <TeamCulture /> <DotAIChatWidget /> </> </UserLayout> } /> */}
        <Route path="/" element={ <UserLayout> <> <Beranda />  <DotAIChatWidget /> </> </UserLayout> } />
        {/* <Route path="/detailproject" element={ <UserLayout> <> <DetailProject /> <DotAIChatWidget /> </> </UserLayout> } /> */}
        <Route path="/user/project" element={ <UserLayout> <> <ProjectPerList /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/user/detailProject/:uuid" element={ <UserLayout> <> <DetailPerProject /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/user/lowongan" element={ <UserLayout> <> <Lowongan /> <DotAIChatWidget /> </> </UserLayout> } />
        <Route path="/user/detailLowongan/:uuid" element={ <UserLayout> <> <DetailLowongan /> <DotAIChatWidget /> </> </UserLayout> } />
        
        
        {/* <Route path="/user/project" element={<> <ProjectPerList /> <DotAIChatWidget /> </>} />
        <Route path="/user/detailProject/:uuid" element={<> <DetailPerProject /> <DotAIChatWidget /> </>} />
        <Route path="/user/lowongan" element={<> <Lowongan /> <DotAIChatWidget /> </>} />
        <Route path="/user/detailLowongan/:uuid" element={<> <DetailLowongan /> <DotAIChatWidget /> </>} /> */}


        {/* Admin Pages (tanpa DOT AI Chat) */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        {/* <Route path="/admin" element={<AdminLayout> <div>Dashboard Admin (Contoh)</div> </AdminLayout>} /> */}
        <Route path="/project" element={<PrivateRoute><AdminLayout><ProjectList /></AdminLayout></PrivateRoute>} />
        <Route path="/employee" element={<PrivateRoute><AdminLayout><EmployeeList /></AdminLayout></PrivateRoute>} />
        <Route path="/jobvacancy" element={<PrivateRoute><AdminLayout><JobVacancy /></AdminLayout></PrivateRoute>} />
        <Route path="/applicantlist" element={<PrivateRoute><AdminLayout><ApplicantList /></AdminLayout></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;