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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    // Redirect to Dashboard after signup
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600">Career Guidance Signup</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 border rounded w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-2 border rounded w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 border rounded w-full mt-3"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 border rounded w-full mt-3"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="contactNo"
            placeholder="Contact Number"
            className="p-2 border rounded w-full mt-3"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            className="p-2 border rounded w-full mt-3"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="number"
            name="tenthMarks"
            placeholder="10th Marks (Out of 100)"
            className="p-2 border rounded w-full mt-3"
            value={formData.tenthMarks}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="twelfthMarks"
            placeholder="12th Marks (Out of 100)"
            className="p-2 border rounded w-full mt-3"
            value={formData.twelfthMarks}
            onChange={handleChange}
            required
          />

          <select
            name="twelfthStream"
            className="p-2 border rounded w-full mt-3"
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
            <input
              type="text"
              name="otherStream"
              placeholder="Enter your stream"
              className="p-2 border rounded w-full mt-3"
              value={formData.otherStream}
              onChange={handleChange}
              required
            />
          )}

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
