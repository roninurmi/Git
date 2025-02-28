// components/Navigation.js
import React from "react";

const Navigation = ({ setActiveSection }) => {
  const showAlert = (section) => {
    alert(`Navigoidaan kohtaan: ${section}`);
    setActiveSection(section);
  };

  return (
    <nav>
      <ul>
        <li><button onClick={() => showAlert("home")}>Koti</button></li>
        <li><button onClick={() => showAlert("about")}>Tietoa</button></li>
        <li><button onClick={() => showAlert("contact")}>Yhteystiedot</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;