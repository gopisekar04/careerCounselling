import React, { useRef } from "react";
import "./Home.css";
import careerImage from "./assets/career-illustration.png"; // Ensure the image is placed correctly

function Home() {
  const careerSectionRef = useRef(null);

  const handleScrollToCareers = () => {
    careerSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <h1>Career Counselling</h1>
        <nav>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Discover Your Dream Career</h2>
          <p>Find the right career path that matches your skills, interests, and passion.</p>
          <button className="explore-btn" onClick={handleScrollToCareers}>
            Explore Careers
          </button>
        </div>
        <div className="hero-image">
          <img src={careerImage} alt="Career Options" />
        </div>
      </section>

      {/* Career Streams Section */}
      <section className="career-section" ref={careerSectionRef}>
        <h3>Explore Emerging Career Paths</h3>
        <div className="career-grid">
          <div className="career-card">
            <h4>🤖 AI Engineer</h4>
            <p>AI engineers build intelligent systems that can automate tasks, analyze data, and improve decision-making.</p>
          </div>
          <div className="career-card">
            <h4>📊 Data Scientist</h4>
            <p>Data scientists interpret complex data to help companies make informed decisions.</p>
          </div>
          <div className="career-card">
            <h4>🩺 Doctor</h4>
            <p>Medical professionals save lives by diagnosing and treating diseases using advanced medical technologies.</p>
          </div>
          <div className="career-card">
            <h4>🎨 Digital Artist</h4>
            <p>Artists create stunning visuals, illustrations, and animations using digital tools.</p>
          </div>
          <div className="career-card">
            <h4>🎭 UX Designer</h4>
            <p>UX Designers focus on creating user-friendly interfaces to enhance digital experiences.</p>
          </div>
          <div className="career-card">
            <h4>🚀 Entrepreneur</h4>
            <p>Entrepreneurs build innovative startups and create businesses that solve real-world problems.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Career Counselling | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
