import React from "react";
import Home from "./home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import ContactUs from "./components/ContactUs";
import { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";


 
function App(){
  const [authUser, setAutUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/Signup"/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
