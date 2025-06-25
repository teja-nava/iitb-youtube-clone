import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Home from './pages/Home';
import WatchLater from './pages/WatchLater';

function App() {
  return (
    <Router>
      <Navbar />
      <Timer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </Router>
  );
}

export default App;