const dummyData = [
    {
      id: 1,
      name: 'Introduction to React',
      instructor: 'John Doe',
      description: 'Learn the basics of React development.',
      enrollmentStatus: 'Open',
      duration: '6 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic HTML', 'Basic JavaScript'],
      syllabus: [
        { week: 1, topic: 'Getting Started with React', content: 'Introduction to React components.' },
        { week: 2, topic: 'State and Props', content: 'Managing component state and props.' },
        // Add more weeks and topics as needed
      ],
    },
    {
      id: 2,
      name: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      description: 'Deepen your knowledge of JavaScript.',
      enrollmentStatus: 'Closed',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Onsite',
      prerequisites: ['Intermediate JavaScript'],
      syllabus: [
        { week: 1, topic: 'ES6 Features', content: 'Explore features introduced in ES6.' },
        { week: 2, topic: 'Asynchronous JavaScript', content: 'Working with asynchronous code.' },
        // Add more weeks and topics as needed
      ],
    },
    // Additional courses
    {
      id: 3,
      name: 'Web Design Fundamentals',
      instructor: 'Alice Johnson',
      description: 'Learn the basics of web design.',
      enrollmentStatus: 'In Progress',
      duration: '4 weeks',
      schedule: 'Fridays, 3:00 PM - 5:00 PM',
      location: 'Online',
      prerequisites: ['Basic HTML', 'Basic CSS'],
      syllabus: [
        { week: 1, topic: 'Introduction to Design Principles', content: 'Understanding design principles.' },
        { week: 2, topic: 'CSS for Designers', content: 'Styling web pages with CSS.' },
        // Add more weeks and topics as needed
      ],
    },
    {
      id: 4,
      name: 'Python Programming Basics',
      instructor: 'Bob Smith',
      description: 'Get started with Python programming.',
      enrollmentStatus: 'Open',
      duration: '6 weeks',
      schedule: 'Saturdays, 10:00 AM - 12:00 PM',
      location: 'Onsite',
      prerequisites: ['None'],
      syllabus: [
        { week: 1, topic: 'Introduction to Python', content: 'Basics of Python syntax.' },
        { week: 2, topic: 'Control Flow in Python', content: 'Conditional statements and loops.' },
        // Add more weeks and topics as needed
      ],
    },

    {
        id: 5,
        name: 'Data Science Fundamentals',
        instructor: 'Emily White',
        description: 'Explore the basics of data science and analysis.',
        enrollmentStatus: 'Open',
        duration: '10 weeks',
        schedule: 'Mondays and Thursdays, 5:30 PM - 7:30 PM',
        location: 'Online',
        prerequisites: ['Basic Statistics', 'Intro to Programming'],
        syllabus: [
          { week: 1, topic: 'Introduction to Data Science', content: 'Overview of data science and its applications.' },
          { week: 2, topic: 'Data Cleaning and Preprocessing', content: 'Cleaning and preparing data for analysis.' },
          // Add more weeks and topics as needed
        ],
      },
      {
        id: 6,
        name: 'Mobile App Development with Flutter',
        instructor: 'Michael Johnson',
        description: 'Build cross-platform mobile apps with Flutter.',
        enrollmentStatus: 'Closed',
        duration: '8 weeks',
        schedule: 'Wednesdays and Fridays, 6:00 PM - 8:00 PM',
        location: 'Onsite',
        prerequisites: ['Dart Programming', 'Basic UI/UX knowledge'],
        syllabus: [
          { week: 1, topic: 'Introduction to Flutter', content: 'Setting up Flutter development environment.' },
          { week: 2, topic: 'Building UI with Flutter Widgets', content: 'Creating interactive user interfaces.' },
          // Add more weeks and topics as needed
        ],
      },
      

      {
        id: 7,
        name: 'Machine Learning Basics',
        instructor: 'Alex Rodriguez',
        description: 'An introduction to machine learning concepts and algorithms.',
        enrollmentStatus: 'In Progress',
        duration: '12 weeks',
        schedule: 'Tuesdays and Saturdays, 3:00 PM - 5:00 PM',
        location: 'Online',
        prerequisites: ['Linear Algebra', 'Python Programming'],
        syllabus: [
          { week: 1, topic: 'Introduction to Machine Learning', content: 'Overview of machine learning fundamentals.' },
          { week: 2, topic: 'Supervised Learning', content: 'Understanding supervised learning algorithms.' },
          // Add more weeks and topics as needed
        ],
      },
      {
        id: 8,
        name: 'Frontend Web Development with Vue.js',
        instructor: 'Sophia Martinez',
        description: 'Learn to build dynamic web applications with Vue.js.',
        enrollmentStatus: 'Open',
        duration: '8 weeks',
        schedule: 'Thursdays, 6:30 PM - 8:30 PM',
        location: 'Onsite',
        prerequisites: ['HTML', 'CSS', 'JavaScript'],
        syllabus: [
          { week: 1, topic: 'Getting Started with Vue.js', content: 'Setting up a Vue.js project and understanding its basics.' },
          { week: 2, topic: 'Vue Components and State Management', content: 'Creating reusable components and managing state.' },
          // Add more weeks and topics as needed
        ],
      },

      {
        id: 9,
        name: 'Cybersecurity Fundamentals',
        instructor: 'William Turner',
        description: 'An overview of cybersecurity principles and practices.',
        enrollmentStatus: 'Closed',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 8:00 PM - 10:00 PM',
        location: 'Online',
        prerequisites: ['Basic Networking', 'Intro to IT Security'],
        syllabus: [
          { week: 1, topic: 'Introduction to Cybersecurity', content: 'Understanding the importance of cybersecurity.' },
          { week: 2, topic: 'Network Security', content: 'Fundamentals of securing computer networks.' },
          // Add more weeks and topics as needed
        ],
      },
      {
        id: 10,
        name: 'React Native Mobile App Development',
        instructor: 'David Foster',
        description: 'Build mobile apps for iOS and Android with React Native.',
        enrollmentStatus: 'Open',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Onsite',
        prerequisites: ['React Basics', 'JavaScript ES6'],
        syllabus: [
          { week: 1, topic: 'Introduction to React Native', content: 'Setting up a React Native project.' },
          { week: 2, topic: 'Navigation and UI Components', content: 'Creating navigation and UI components.' },
          // Add more weeks and topics as needed
        ],
      },
      
      ];
    
    // Add more courses as needed
  
  export default dummyData;
  