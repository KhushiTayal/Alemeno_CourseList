import React from 'react';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
  // Get selected course from Redux state
  const selectedCourse = useSelector((state) => state.selectedCourse);

  // Check if the selected course exists
  if (!selectedCourse) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  // Destructure properties with default values to avoid potential undefined issues
  const {
    name = '',
    instructor = '',
    description = '',
    enrollmentStatus = '',
    duration = '',
    schedule = '',
    location = '',
    prerequisites = [],
    syllabus = [],
  } = selectedCourse;

  return (
    <div>
      <h2>Course Details</h2>
      <div>
        <h3>{name}</h3>
        <p>Instructor: {instructor}</p>
        <p>Description: {description}</p>
        <p>Enrollment Status: {enrollmentStatus}</p>
        <p>Duration: {duration}</p>
        <p>Schedule: {schedule}</p>
        <p>Location: {location}</p>
        <p>Prerequisites: {prerequisites.join(', ')}</p>

        <h4>Syllabus</h4>
        <ul>
          {syllabus.map((week) => (
            <li key={week.week}>
              Week {week.week}: {week.topic} - {week.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
