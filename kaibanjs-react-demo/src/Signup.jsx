import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    dob: "",
    gender: "",
    tenthMarks: "",
    twelfthMarks: "",
    twelfthStream: "",
    otherStream: "",
  });

  const twelfthStreams = [
    "Science (PCM)",
    "Science (PCB)",
    "Commerce",
    "Arts/Humanities",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      console.log("inside handlesubmit");
      
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/dashboard");
      } else {
        console.log(data.error);
        // (data.error);
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>Create an account to continue</p>

        <form className="form-container">
          <div className="left-container">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="right-container">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>10th Marks</label>
              <input
                type="number"
                name="tenthMarks"
                value={formData.tenthMarks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>12th Marks</label>
              <input
                type="number"
                name="twelfthMarks"
                value={formData.twelfthMarks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>12th Stream</label>
              <select
                name="twelfthStream"
                value={formData.twelfthStream}
                onChange={handleChange}
                required
              >
                <option value="">Select 12th Stream</option>
                {twelfthStreams.map((stream, index) => (
                  <option key={index} value={stream}>
                    {stream}
                  </option>
                ))}
              </select>
              {formData.twelfthStream === "Other" && (
                <div className="form-group">
                  <label>Enter Your Stream</label>
                  <input
                    type="text"
                    name="otherStream"
                    value={formData.otherStream}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </div>
          </div>
          
        </form>
        <button onClick={handleSubmit}>Sign Up</button>
        <p className="signin-text">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;