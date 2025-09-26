import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import './App.scss';
import Sidebar from './layouts/Sidebar';
import Flex from './components/common/Flex';
import {Layout} from 'antd';
function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
   
    <Router>
    <Sidebar hideLogo={false} containerId="miniSidebar" />
     <Routes>
       <Route path="/dashboard" element={<DashboardPage />} />
       {/* Add more routes here */}
       <Route path="/" element={<DashboardPage/>} />
     </Routes>
     
   </Router>
    </Layout>


   
    
  );
}

export default App;
