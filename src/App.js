import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Router>
       <Navbar/>
          <Routes>
            <Route path='/' exact  element={<Home/>}/>
            <Route path='/Products' exact  element={<Products/>}/>
            <Route path='/Services' exact  element={<Services/>}/>
            <Route path='/SignUp' exact  element={<SignUp/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
