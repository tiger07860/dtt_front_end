import "./App.css";
import Timetable from "./Components/Timetable";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import { useState } from "react";
import LoggedInContent from "./Components/LoggedInContent";
import Profile from "./Components/Profile";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}>
            <Route index element={<Home />} /> 
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>/blogs/about
      </BrowserRouter>
    </div>
  );
}
export default Home;
