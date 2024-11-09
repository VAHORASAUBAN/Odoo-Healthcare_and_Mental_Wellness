import React, { useState } from 'react';
import './Profile.css';
import contact from './images/contact.png'
import account from './images/account.png'

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [qualification, setQualification] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [qualificationYear, setQualificationYear] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic
    console.log({
      firstName,
      middleName,
      lastName,
      qualification,
      specialization,
      qualificationYear,
      phone,
      email,
    });
  };

  return (
    <div className="rightcontainer">
      <div className="profile">
        <p>John Doe</p>
        <img
          src={profileImage || account}
          alt="Profile"
        />
      </div>
      <div className="main-header">
        <p>Profile</p>
      </div>
      <form onSubmit={handleSubmit}>
        <p className="pinfo">Personal Information</p>
        <div className="upperInfo">
          <div className="profileInfo">
            <img src={contact} alt="Profile Icon" />
            <input
              type="file"
              name="profileImage"
              onChange={handleProfileImageChange}
            />
          </div>
          <div className="info">
            <div className="col">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="mname">Middle Name</label>
              <input
                type="text"
                name="mname"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="quali">Qualification</label>
              <input
                type="text"
                name="quali"
                placeholder="Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="specialize">Specialization</label>
              <input
                type="text"
                name="specialize"
                placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="qyear">Qualification Year</label>
              <input
                type="text"
                name="qyear"
                placeholder="Qualification Year"
                value={qualificationYear}
                onChange={(e) => setQualificationYear(e.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="pinfo">Contact Information</p>
        <div className="lowerInfo">
          <div className="info">
            <div className="col">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="updateDetails">
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
