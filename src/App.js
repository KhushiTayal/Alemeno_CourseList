import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import "./App.css";
import StudentDashboard from './components/StudentDashboard';

const NavigationBar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div>
          <Link to="/">Course List</Link>
        </div>
        <div>
          <Link to="/dashboard">Student Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
