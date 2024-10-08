import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Proje Çalışanları */}
      <section className="team-section">
        <h2>Team Members</h2>
        <div className="team">
          <div className="team-member">
            <img src="src/assets/dp.png" alt="Deniz POLAT"/>
            <p>Deniz POLAT</p>
          </div>
          <div className="team-member">
            <img src="src\assets\hu.jpg" alt="Hakan UCA"/>
            <p>Hakan UCA</p>
          </div>
          <div className="team-member">
            <img src="src\assets\ad.jpg" alt="Abdullah DOĞANAY"/>
            <p>Abdullah DOĞANAY</p>
          </div>
          <div className="team-member">
            <img src="src\assets\ou.jpg" alt="Onur USLU"/>
            <p>Onur USLU</p>
          </div>
        </div>
      </section>

      {/* Supervisor */}
      <section className="supervisor-section">
        <h2>Supervisor</h2>
        <div className="supervisor">
          <img src="src\assets\tkc.png" alt="Tolga Kurtuluş ÇAPIN"/>
          <p>Tolga Kurtuluş ÇAPIN</p>
        </div>
      </section>

      {/* Jüri */}
      <section className="jury-section">
        <h2>Jury Members</h2>
        <div className="jury">
          <div className="jury-member">
            <img src="src\assets\cu.jpg" alt="Çağatay ÜNDEĞER"/>
            <p>Çağatay ÜNDEĞER</p>
          </div>
          <div className="jury-member">
            <img src="src\assets\ab.png" alt="Ali BERKOL"/>
            <p>Ali BERKOL</p>
          </div>
        </div>
      </section>

      {/* Proje Anlatımı */}
      <section className="description-section">
        <h2>Description Of The Project</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
    </div>
  );
}

export default App;
