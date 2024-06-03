// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
