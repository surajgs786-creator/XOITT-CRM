import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LeadDashboard from "./pages/LeadDashboard";
import Contacts from "./pages/Contacts";
import AfterSalesService from "./pages/AfterSalesService";
import TaskFollowup from "./pages/TaskFollowup";
import ContactProfile from "./pages/ContactProfile";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex bg-background-light dark:bg-background-dark">
        <Navigation />
        <div className="flex flex-col flex-1">
          <Header title="CRM Application" />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/leads" element={<LeadDashboard />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/after-sales" element={<AfterSalesService />} />
              <Route path="/tasks" element={<TaskFollowup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;