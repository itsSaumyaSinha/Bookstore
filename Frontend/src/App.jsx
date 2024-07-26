import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import ContactUs from "./components/ContactUs";


 
function App(){
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Courses/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
