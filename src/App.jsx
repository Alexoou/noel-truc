import './Library.scss'
import React from "react";
import {Routes,Route,} from "react-router-dom";


import Home from './Home';
import Detecteur from './pages/Detecteur';
import Truc1 from './pages/Truc_1';
import Truc2 from './pages/Truc_2';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Detecteur" element={<Detecteur />}/>
      <Route path="/Truc_1" element={<Truc1 />}/>
      <Route path="/Truc_2" element={<Truc2 />}/>
   </Routes>

   
  )
}


export default App
