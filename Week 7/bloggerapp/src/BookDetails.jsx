import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, title: "Ikigai", author: "Héctor García" }
  ];

  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
