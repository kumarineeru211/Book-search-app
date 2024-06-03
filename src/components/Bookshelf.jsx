// src/components/Bookshelf.jsx
import React, { useState, useEffect } from 'react';
import './Bookshelf.css';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div className="card" key={index}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.[0] || 'Unknown Author'}</p>
          </div>
        ))}
      </div>
      <button onClick={() => window.location.href = '/'}>Back to Search</button>
    </div>
  );
};

export default Bookshelf;
