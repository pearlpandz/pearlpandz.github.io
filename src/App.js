import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';

import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;