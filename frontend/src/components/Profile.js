import React, { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        course: 'Computer Science',
        linkedin: '',
        github: '',
        photo: '',
        college: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    return (
        <div style={{ marginTop: '50px', padding: '20px', maxWidth: '800px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)', marginLeft: 'auto', marginRight: 'auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Profile</h1>
            <form>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Name:</label>
                    <input type="text" name="name" value={profile.name} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
                    <input type="email" name="email" value={profile.email} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Course:</label>
                    <input type="text" name="course" value={profile.course} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>LinkedIn:</label>
                    <input type="text" name="linkedin" value={profile.linkedin} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>GitHub:</label>
                    <input type="text" name="github" value={profile.github} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Photo URL:</label>
                    <input type="text" name="photo" value={profile.photo} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>College:</label>
                    <input type="text" name="college" value={profile.college} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Address:</label>
                    <input type="text" name="address" value={profile.address} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
            </form>
        </div>
    );
};

export default Profile;
