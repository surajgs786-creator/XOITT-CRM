import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import DealsPage from './pages/deals';
import CustomersPage from './pages/customers';
import './App.scss';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/header/Header';
import { Provider } from 'react-redux';
import store from './store/store';
import Flex from './components/common/Flex';
import LeadPage from './pages/leads';
import SignUpPage from './pages/signup';
import LeadDetailsPage from './pages/leads/leadDetails';
import SignInPage from './pages/signin';

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
                <Route path="/leads" element={<LeadPage/>} />
                <Route path="/leadDetails" element={<LeadDetailsPage/>} />
                <Route path="/leadDetails?action=Edit" element={<LeadDetailsPage/>} />
                <Route path="/leadDetails?action=View" element={<LeadDetailsPage/>} />
                <Route path="/deals" element={<DealsPage />} />
                <Route path="/customers" element={<CustomersPage />} />
                <Route path ="/signin" element={<SignInPage />} />
                <Route path ="/signup" element={<SignUpPage/>} />
              </Routes>
            </Flex>
            
         
  </div>
</Router>
</Provider>
    </div>
   
        
          
          
     
  );
}

export default App;
