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

function App() {
  return (
    <div className="container">
      {/* Project Name Header */}
      <header>
        <h1>SurgeVision</h1>
      </header>

      {/* Project Description */}
      <section className="description-section">
        <h2>Description Of The Project</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="linkedin-icon" 
                />
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
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="linkedin-icon" 
                />
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
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="linkedin-icon" 
                />
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
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  className="linkedin-icon" 
                />
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
          <p><span className="name">Tolga Kurtuluş ÇAPIN</span></p> {/* Added name class */}
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
            <p><span className="name">Çağatay ÜNDEĞER</span></p> {/* Added name class */}
          </div>
          <div className="jury-member">
            <a href="https://www.linkedin.com/in/aliberkol" target="_blank" rel="noopener noreferrer">
              <img src={ab} alt="Ali BERKOL" />
            </a>
            <p><span className="name">Ali BERKOL</span></p> {/* Added name class */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;