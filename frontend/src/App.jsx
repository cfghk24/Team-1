import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
import Chatbot from "./components/Chatbot";
import Cases from "./pages/Cases";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "dark text-foreground bg-background" : ""}>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar2 toggleDarkMode={toggleDarkMode} />
        <div className="h-20"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:speciality" element={<Places />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cases" element={<Cases/>}/>
          {/* <Route path="/donate/:caseId" element={<Donate />} /> */}
          <Route path="/report" element={<Report />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
