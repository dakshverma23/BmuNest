import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/student/123'); // Change to your actual API endpoint
                setStudent(response.data);
            } catch (error) {
                console.error("There was an error fetching the student data!", error);
            }
        };
        fetchStudent();
    }, []);

    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <h1>BMUNest</h1>
                </div>
                <div className="navLinks">
                    <Link to="/login" className="link">Login</Link>
                    <Link to="/signup" className="link">Signup</Link>
                </div>
            </nav>
            <div className="mainContent">
                <div className="sidebar">
                    <img src="C:/Users/daksh/OneDrive/Desktop/logobn.png" alt="Logo" className="logoImage" />
                    {student && (
                        <div className="userDetails">
                            <img src={student.profilePicUrl} alt="User" className="profilePic" />
                            <div className="userInfo">
                                <h2>{student.name}</h2>
                                <p>Roll No.: {student.rollNo}</p>
                                <p>{student.year}</p>
                                <p>{student.course}</p>
                                <p>{student.branch}</p>
                            </div>
                        </div>
                    )}
                    <ul className="navList">
                        <li><Link to="/profile" className="navItem">Profile</Link></li>
                        <li><Link to="/syllabus" className="navItem">Syllabus</Link></li>
                        <li><Link to="/calendar" className="navItem">Calendar</Link></li>
                        <li><Link to="/timetable" className="navItem">Time Table</Link></li>
                        <li><Link to="/library" className="navItem">Library</Link></li>
                        <li><Link to="/fees" className="navItem">Fees Details</Link></li>
                        <li><Link to="/leave" className="navItem">Leave Details</Link></li>
                        <li><Link to="/hostel" className="navItem">Hostel</Link></li>
                        <li><Link to="/mentor" className="navItem">Contact Mentor</Link></li>
                        <li><Link to="/blogs" className="navItem">Blogs</Link></li>
                        <li><Link to="/alumni" className="navItem">Alumni</Link></li>
                        <li><Link to="/announcements" className="navItem">Announcements</Link></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="header">
                        <div className="announcementRow">
                            <div className="announcementBox">0 Announcements</div>
                            <div className="announcementBox">- Attendance</div>
                            <div className="announcementBox"> Assessment</div>
                            <div className="announcementBox"> Task</div>
                            <div className="announcementBox"> Placement</div>
                        </div>
                    </div>
                    <div className="schedule">
                        <h3>Today's Schedule</h3>
                        <p>No schedule for Today</p>
                    </div>
                    <div className="bulletinBoard">
                        <h3>Bulletin Board</h3>
                        <Link to="/posts" className="link">View All Posts</Link> | <Link to="/compose" className="link">Compose</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
