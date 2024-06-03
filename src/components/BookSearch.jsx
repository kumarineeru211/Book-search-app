// src/components/BookSearch.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookSearch.css';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
        setResults(response.data.docs);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={handleSearch}
      />
      <div className="results">
        {results.map((book, index) => (
          <div className="card" key={index}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.[0] || 'Unknown Author'}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
     <div>
         <button onClick={() => window.location.href = '/bookshelf'}>Go to My Bookshelf</button>
     </div>
    </div>
  );
};

export default BookSearch;
