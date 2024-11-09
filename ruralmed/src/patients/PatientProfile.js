import React, { useState } from 'react';
import './PatientProfile.css';
import PatientNavBar from '../components/PatientNavBar'

const PatientProfile = () => {
  const [formData, setFormData] = useState({
    profileImage: '',
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    bloodGroup: '',
    dob: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <PatientNavBar/>
    <div className="rightcontainer">
      <div className="profile">
        <p>John Doe</p>
        <img src="/images/account.png" alt="Account" />
      </div>
      <div className="main-header">
        <p>Profile</p>
      </div>
      <form onSubmit={handleSubmit}>
        <p className="pinfo">Personal Information</p>
        <div className="upperInfo">
          <div className="profileInfo">
            <img src="/images/contact.png" alt="Contact" />
            <input
              type="file"
              name="profileImage"
              onChange={handleFileChange}
            />
          </div>
          <div className="info">
            <div className="col">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="mname">Middle Name</label>
              <input
                type="text"
                name="mname"
                placeholder="Middle Name"
                value={formData.mname}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
              >
                <option value="">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="O+">O+</option>
                <option value="O">O</option>
                <option value="AB+">AB+</option>
                <option value="AB">AB</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
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
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="updateDetails">
            <button type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default PatientProfile;
