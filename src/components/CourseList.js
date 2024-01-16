import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses, setSelectedCourse, enrollCourse } from '../redux/actions'; // Assuming you have setSelectedCourse action
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./CourseList.css";
import { useNavigate } from 'react-router-dom';
import dummyData from './dummyData';

const CourseList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Dummy data for illustration, replace with actual data fetching logic
    const fetchedCourses = dummyData;

    dispatch(setCourses(fetchedCourses));
    setFilteredCourses(fetchedCourses);
  }, [dispatch]);

  const handleCourseClick = (courseId) => {
    // Navigate to the course details page or dispatch an action to update selectedCourse in the Redux state
    // Example: history.push(`/course/${courseId}`);
    dispatch(setSelectedCourse(courseId));
    // Or: dispatch(setSelectedCourse(courseId));
  };


  const handleEnroll = (courseId) => {
    // Dispatch an action to enroll in the course
    dispatch(enrollCourse(courseId));
    console.log('Enrolled in course with ID:', courseId);
    navigate('/dashboard');
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm)
    );

    setFilteredCourses(filtered);
  };

  return (
    <div>
      <h2>Course List</h2>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id} onClick={() => handleCourseClick(course.id)}>
            <Link to={`/course/${course.id}`}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            {/* Add more course information as needed */}
            </Link>
            <button onClick={() => handleEnroll(course.id)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
