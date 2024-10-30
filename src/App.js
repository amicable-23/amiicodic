import React, {Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

// my component
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

// my pages
const Home = lazy(()=> import ("./pages/Home"))
const Signup = lazy(()=> import ("./pages/Signup"))
const Login = lazy(()=> import ("./pages/Login"))
const About = lazy(()=> import ("./pages/About"))
const Activities = lazy(()=> import ("./pages/Activities"))
const Courses = lazy(()=> import ("./pages/Courses"))
const NotFound = lazy(()=> import ("./pages/NotFound"))


function App() {
  return (
   <Suspense fallback={<div className="spinner-grow position-absolute top-50 start-50  "></div>}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={ <Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
