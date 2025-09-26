import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import './App.scss';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/header/Header';
import { Provider } from 'react-redux';
import store from './store/store';
import Flex from './components/common/Flex';
import LeadContainer from './components/Leads/LeadsContainer';
import LeadDetails from './components/Leads/LeadDetails';

function App() {
  return (
    <div>

<Provider store={store}>
<Router>
<Sidebar hideLogo={false} containerId="miniSidebar" />
<div id="content" className="position-relative h-100 ">
  <Header />
        
            <Flex direction="column" flex="1" className="p-3">
            <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<DashboardPage/>} />
                <Route path="/leads" element={<LeadContainer/>} />
                <Route path="/leadDetails" element={<LeadDetails/>} />
                <Route path="/leadDetails?action=Edit" element={<LeadDetails/>} />
                <Route path="/leadDetails?action=View" element={<LeadDetails/>} />
              </Routes>
            </Flex>
            
         
  </div>
</Router>
</Provider>
    </div>
   
        
          
          
     
  );
}

export default App;
