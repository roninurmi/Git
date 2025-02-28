import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <Header />
      <Navigation setActiveSection={setActiveSection} />
      <main>
        {activeSection === "home" && <Section title="Koti" content="Tämä on kotisivu." />}
        {activeSection === "about" && <Section title="Tietoa" content="Tämä on tietoa-sivu." />}
        {activeSection === "contact" && <Section title="Yhteystiedot" content="Tämä on yhteystiedot-sivu." />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
