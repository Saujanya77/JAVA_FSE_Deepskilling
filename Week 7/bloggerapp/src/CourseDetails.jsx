import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 101, name: "React for Beginners", duration: "3 Weeks" },
    { id: 102, name: "Advanced JavaScript", duration: "4 Weeks" }
  ];

  return (
    <div>
      <h2>🎓 Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
