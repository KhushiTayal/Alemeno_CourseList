import React from 'react';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
  const selectedCourse = useSelector((state) => state.selectedCourse);

  if (!selectedCourse) {
    return <div>Loading...</div>; 
  }

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
