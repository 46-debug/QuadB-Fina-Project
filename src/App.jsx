import React from 'react'
import Home from './Home';
import Features from './Features';
import GettingStarted from './GettingStarted';
import ChangeLog from './ChangeLog';
import Customers from './Customers';
import Tutorial from './Tutorial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col items-center bg-black'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/changelog" element={<ChangeLog />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

