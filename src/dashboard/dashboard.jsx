import React from "react";
import AboutSection from "../aboutsection/AboutSection";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Ivory Vines</h1>
          <p className="hero-subtitle">Timeless elegance for your special day</p>
        </div>
      </section>

      <AboutSection />
    </>
  );
}
