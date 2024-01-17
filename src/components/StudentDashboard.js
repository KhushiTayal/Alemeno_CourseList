
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseAsCompleted, undoMarkCourseAsCompleted } from '../redux/actions';

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  const handleMarkAsCompleted = (courseId) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  const handleUndoMarkAsCompleted = (courseId) => {
    dispatch(undoMarkCourseAsCompleted(courseId));
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id} className={course.completed ? 'completed-course' : ''}>
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <p>Progress: {course.progress}%</p>
              {course.completed ? (
                <>
                  <p className="completed-message">Course Completed</p>
                  <button onClick={() => handleUndoMarkAsCompleted(course.id)}>
                    Undo Completion
                  </button>
                </>
              ) : (
                <button onClick={() => handleMarkAsCompleted(course.id)}>
                  Mark as Completed
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDashboard;
