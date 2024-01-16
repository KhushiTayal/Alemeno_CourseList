const initialState = {
    courses: [],
    enrolledCourses: [],
    selectedCourse: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COURSES':
        return { ...state, courses: action.payload };
        case 'ENROLL_COURSE':
          const courseId = action.payload;
          const enrolledCourse = state.courses.find((course) => course.id === courseId);
          return {
            ...state,
            enrolledCourses: [...state.enrolledCourses, enrolledCourse],
          };
      case 'SET_SELECTED_COURSE':
        return { ...state, selectedCourse: state.courses.find((course) => course.id === action.payload) };
      case 'COMPLETE_COURSE':
        // Implement logic to mark a course as completed
        return state;

        case 'MARK_COURSE_AS_COMPLETED':
          // Find the course by ID and update its completion status
          const updatedCourses = state.enrolledCourses.map((course) =>
            course.id === action.payload ? { ...course, completed: true } : course
          );
          return { ...state, enrolledCourses: updatedCourses };


          case 'UNDO_MARK_COURSE_AS_COMPLETED':
  // Find the course by ID and update its completion status to false
  const updatedCoursesUndo = state.enrolledCourses.map((course) =>
    course.id === action.payload ? { ...course, completed: false } : course
  );
  return { ...state, enrolledCourses: updatedCoursesUndo };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  