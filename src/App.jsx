import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import LeadDashboard from "./pages/LeadDashboard";
import LeadDashboard2 from "./pages/LeadDashboard2";
import LeadDashboard3 from "./pages/LeadDashboard3";
import AfterSalesService from "./pages/AfterSalesService";
import TaskFollowup from "./pages/TaskFollowup";
import ContactProfile from "./pages/ContactProfile";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
        <Header title="CRM Application" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LeadDashboard />} />
            <Route path="/leads" element={<LeadDashboard2 />} />
            <Route path="/contacts" element={<LeadDashboard3 />} />
            <Route path="/after-sales" element={<AfterSalesService />} />
            <Route path="/tasks" element={<TaskFollowup />} />
            <Route path="/contact-profile" element={<ContactProfile />} />
          </Routes>
        </main>
        <Footer />
        <Navigation />
      </div>
    </Router>
  );
};

export default App;