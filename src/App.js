import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlog from './pages/AddBlog';
import Home from './pages/Home'
import Redirect from './pages/Redirect';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/undefined" element={<Home/> } />
          <Route path="/*" element={<Redirect/> } />
          <Route path="addblog" element={<AddBlog/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App