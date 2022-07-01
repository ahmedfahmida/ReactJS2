import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Error from "./Pages/Error";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
//import DataFetch from "./DataFetch";

//import { UseEffect } from "./UseEffect";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}