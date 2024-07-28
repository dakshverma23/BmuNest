import React, { useState } from 'react';

const Syllabus = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const subjects = [
        { name: 'Mathematics', pdf: 'math_syllabus.pdf' },
        { name: 'Physics', pdf: 'physics_syllabus.pdf' },
        { name: 'Chemistry', pdf: 'chemistry_syllabus.pdf' },
        { name: 'Biology', pdf: 'biology_syllabus.pdf' }
    ];

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div style={{ marginTop: '50px', padding: '20px', maxWidth: '800px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)', marginLeft: 'auto', marginRight: 'auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Syllabus</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left' }}>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject, index) => (
                        <tr key={index} onClick={() => handleSubjectClick(subject)} style={{ cursor: 'pointer' }}>
                            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{subject.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedSubject && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{selectedSubject.name} Syllabus</h2>
                    <embed src={selectedSubject.pdf} type="application/pdf" width="100%" height="600px" />
                </div>
            )}
        </div>
    );
};

export default Syllabus;
