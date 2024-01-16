export const setCourses = (courses) => ({
    type: 'SET_COURSES',
    payload: courses,
  });
  
  export const enrollCourse = (courseId) => ({
    type: 'ENROLL_COURSE',
    payload: courseId,
  });
  
  export const completeCourse = (courseId) => ({
    type: 'COMPLETE_COURSE',
    payload: courseId,
  });


  export const markCourseAsCompleted = (courseId) => ({
    type: 'MARK_COURSE_AS_COMPLETED',
    payload: courseId,
  });



  export const setSelectedCourse = (courseId) => ({
    type: 'SET_SELECTED_COURSE',
    payload: courseId,
  });

  

  export const undoMarkCourseAsCompleted = (courseId) => ({
    type: 'UNDO_MARK_COURSE_AS_COMPLETED',
    payload: courseId,
  });
