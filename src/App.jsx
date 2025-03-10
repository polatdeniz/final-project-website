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
import logo from "./assets/logo.gif"; // Import the logo image

function App() {
  return (
    <div className="container">
      {/* Project Name Header */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" /> {/* Add logo here */}
        <h1></h1>
      </header>

      {/* Project Description */}
      <section className="description-section">
        <h2>Description Of The Project - (SurgeVision)</h2>
        <p>
          This project aims to develop an advanced surgical navigation system tailored for hip replacement surgeries, enhancing precision and safety. The system allows surgeons to visualize 3D MRI images of the patient’s anatomy in real-time, either on a screen or through optional Augmented Reality (AR) glasses. The use of AR glasses is not mandatory but can provide additional visual support during surgery. The system’s key functionality is its synchronization between the surgeon’s physical touchpoints on the patient and the corresponding areas in the MRI images. As the surgeon interacts with the patient's body, these points are marked on the display, allowing for real-time alignment and guidance. This feature improves surgical accuracy, minimizes risks, and helps reduce the procedure’s duration. By integrating real-time imaging with precise feedback, this system is designed to optimize hip replacement surgeries, making them faster, safer, and more reliable for both surgeons and patients. The optional AR integration provides flexibility, offering enhanced visualization for those who wish to utilize the technology.
        </p>
      </section>
       
      {/* Team Members */}
      <section className="team-section">
        <h2>Team Members</h2>
        <div className="team">
          <div className="team-member">
            <a href="https://www.linkedin.com/in/denizpolat1/" target="_blank" rel="noopener noreferrer">
              <img src={dp} alt="Deniz POLAT" />
            </a>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span className="name">Deniz POLAT</span>
              <a href="https://www.linkedin.com/in/denizpolat1/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
              </a>
            </p>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/hakanuca/" target="_blank" rel="noopener noreferrer">
              <img src={hu} alt="Hakan UCA" />
            </a>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span className="name">Hakan UCA</span>
              <a href="https://www.linkedin.com/in/hakanuca/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
              </a>
            </p>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/abdullahdoganay/" target="_blank" rel="noopener noreferrer">
              <img src={ad} alt="Abdullah DOĞANAY" />
            </a>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span className="name">Abdullah DOĞANAY</span>
              <a href="https://www.linkedin.com/in/abdullahdoganay/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
              </a>
            </p>
          </div>
          <div className="team-member">
            <a href="https://www.linkedin.com/in/eng-onuruslu/" target="_blank" rel="noopener noreferrer">
              <img src={ou} alt="Onur USLU" />
            </a>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span className="name">Onur USLU</span>
              <a href="https://www.linkedin.com/in/eng-onuruslu/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Supervisor */}
      <section className="supervisor-section">
        <h2>Supervisor</h2>
        <div className="supervisor">
          <a href="https://www.linkedin.com/in/tolga-çapın-9689595/" target="_blank" rel="noopener noreferrer">
            <img src={tkc} alt="Tolga Kurtuluş ÇAPIN" />
          </a>
          <p><span className="name">Tolga Kurtuluş ÇAPIN</span></p> 
        </div>
      </section>

      {/* Jury Members */}
      <section className="jury-section">
        <h2>Jury Members</h2>
        <div className="jury">
          <div className="jury-member">
            <a href="https://www.linkedin.com/in/cagatay-undeger-959b9110/" target="_blank" rel="noopener noreferrer">
              <img src={cu} alt="Çağatay ÜNDEĞER" />
            </a>
            <p><span className="name">Çağatay ÜNDEĞER</span></p> 
          </div>
          <div className="jury-member">
            <a href="https://www.linkedin.com/in/aliberkol" target="_blank" rel="noopener noreferrer">
              <img src={ab} alt="Ali BERKOL" />
            </a>
            <p><span className="name">Ali BERKOL</span></p> 
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="documentation-section">
        <h2>Documentation</h2>
        <p>
          <a 
            href="https://github.com/polatdeniz/final-project-website/blob/main/src/assets/SurgeVision%20-%20Project%20Proposal.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Project Proposal Report - SurgeVision
          </a>
        </p>
        <p>
          <a 
            href="https://github.com/polatdeniz/final-project-website/blob/main/src/assets/Project_Specifications_Report_SurgeVision.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Project Specifications Report - SurgeVision
          </a>
        </p>
        <p>
          <a 
            href="https://github.com/polatdeniz/final-project-website/blob/main/src/assets/Project_Analysis_Report_SurgeVision.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Project Analysis Report - SurgeVision
          </a>
        </p>
        <p>
          <a 
            href="https://github.com/polatdeniz/final-project-website/blob/main/src/assets/SurgeVision_High-Level_Design_Report.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            High-Level Design Report - SurgeVision
          </a>
        </p>
        <p>
          <a 
            href="https://github.com/polatdeniz/final-project-website/blob/main/src/assets/SurgeVision_Backlog.xlsx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Backlog - SurgeVision
          </a>
        </p>
        <p>
          <a 
            href="https://github.com/polatdeniz/final-project-website/blob/main/src/assets/SurgeVision_Low-Level_Design_Report.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Low-Level Design Report - SurgeVision
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
