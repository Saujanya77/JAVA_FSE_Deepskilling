import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState("book");
  const [showCourses, setShowCourses] = useState(true);

  // 1️⃣ Using element variables
  let displayComponent;
  if (selected === "book") displayComponent = <BookDetails />;
  else if (selected === "blog") displayComponent = <BlogDetails />;

  return (
    <div className="App">
      <h1>🧠 Blogger App</h1>

      {/* Dropdown for switching components */}
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="book">Book Details</option>
        <option value="blog">Blog Details</option>
      </select>

      {/* 1. Using element variable */}
      {displayComponent}

      {/* 2. Using ternary operator */}
      <hr />
      <h2>📦 Course Section</h2>
      <button onClick={() => setShowCourses(prev => !prev)}>
        {showCourses ? "Hide Courses" : "Show Courses"}
      </button>

      {showCourses ? <CourseDetails /> : <p>No courses shown.</p>}

      {/* 3. Using logical && operator */}
      <hr />
      <h2>🕹️ Bonus: Direct && Conditional</h2>
      {selected === "blog" && <p>You're currently viewing blog posts.</p>}
    </div>
  );
}

export default App;
