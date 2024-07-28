import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Syllabus from './components/Syllabus';
import Calendar from './components/Calendar';
import TimeTable from './components/TimeTable';
import Library from './components/Library';
import Fees from './components/FeesDetails';
import Leave from './components/LeaveDetails';
import Hostel from './components/Hostel';
import ContactMentor from './components/ContactMentor';
import Blogs from './components/Blogs';
import Alumni from './components/Alumni';
import Announcements from './components/Announcements';
import Login from './components/login';
import Signup from './components/signup';
import './App.css';


function App() {
    return (
        <Router>
            <div className="container">
                <header className="header">
                    <h1>BMU Nest</h1>
                </header>
                <div className="content">
                    <Routes>
                    <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/syllabus" element={<Syllabus />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/timetable" element={<TimeTable />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/fees" element={<Fees />} />
                        <Route path="/leave" element={<Leave />} />
                        <Route path="/hostel" element={<Hostel />} />
                        <Route path="/mentor" element={<ContactMentor />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/alumni" element={<Alumni />} />
                        <Route path="/announcements" element={<Announcements />} />
                        <Route path="/login" component={<Login/>} />
                    <Route path="/signup" component={<Signup/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
