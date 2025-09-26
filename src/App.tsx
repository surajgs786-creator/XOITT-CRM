import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import './App.scss';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/header/Header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="d-flex flex-fill">
            <Sidebar hideLogo={false} containerId="miniSidebar" />
            <main className="flex-fill">
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<DashboardPage/>} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
