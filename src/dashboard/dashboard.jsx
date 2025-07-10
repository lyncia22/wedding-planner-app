import React from "react";
import AboutSection from "../aboutsection/AboutSection";
import "./dashboard.css";
import ToolsSection from "../components/ToolsSection";
import VendorsSection from "../components/VendorsSection";

export default function Dashboard() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Wedding Bliss</h1>
          <p className="hero-subtitle">Timeless elegance for your special day</p>
        </div>
      </section>

      <AboutSection />
      <ToolsSection />
      <VendorsSection />
    </>
  );
}
