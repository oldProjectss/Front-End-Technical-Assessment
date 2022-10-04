import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateEvent from './components/CreateEvent';
import Event from './components/Event';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/create" element={<CreateEvent />} />
        <Route exact path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
