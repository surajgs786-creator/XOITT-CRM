import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
  const isWeb = useMediaQuery({ minWidth: 768 }); // Web for screens >= 768px
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile for screens < 768px

  return (
    <Router>
      <div className="min-h-screen flex bg-background-light dark:bg-background-dark">
        {isWeb && <Navigation />}
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
          {isMobile && <Footer />}
        </div>
      </div>
    </Router>
  );
};

export default App;