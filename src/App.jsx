import React from "react";
import "./App.css";
import dp from "./assets/dp.png";
import hu from "./assets/hu.jpg";
import ad from "./assets/ad.jpg";
import ou from "./assets/ou.jpg";
import tkc from "./assets/tkc.png";
import cu from "./assets/cu.jpg";
import ab from "./assets/ab.png";
import linkedinIcon from "./assets/linkedin.png";
import logo from "./assets/logo.png"; // Import the logo image

function App() {
  return (
    <div className="container">
      {/* Project Name Header */}
      <header>
        {/* Left Logo */}
        <img src={logo} alt="Logo" className="logo logo-left" />
        {/* Right Logo */}
        <img src={logo} alt="Logo" className="logo logo-right" />
        
        <h1>SurgeVision</h1>
      </header>

      {/* Project Description */}
      <section className="description-section">
        <h2>Description Of The Project</h2>
        <p>
          This project aims to develop an advanced surgical navigation system tailored for hip replacement surgeries, enhancing precision and safety...
        </p>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <h2>Team Members</h2>
        <div className="team">
          {/* Team members go here */}
        </div>
      </section>

      {/* Supervisor */}
      <section className="supervisor-section">
        <h2>Supervisor</h2>
        <div className="supervisor">
          {/* Supervisor details go here */}
        </div>
      </section>

      {/* Jury Members */}
      <section className="jury-section">
        <h2>Jury Members</h2>
        <div className="jury">
          {/* Jury members go here */}
        </div>
      </section>
    </div>
  );
}

export default App;
