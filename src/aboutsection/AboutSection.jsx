import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section split">
      <div className="about-content">
        <h2>Discover Wedding Bliss</h2>
        <p>
          At Wedding Bliss, we don’t just plan weddings — we create moments that live in your heart forever.
          From the very first “yes” to the final dance, we weave together every detail to tell your love story
          with grace, elegance, and joy.
        </p>
        <p>
          Whether you're dreaming of a grand celebration or an intimate gathering, our team is here to bring your
          vision to life. Let’s craft a day filled with laughter, happy tears, and unforgettable memories.
        </p>
      </div>

      <div className="about-image">
        <img
          src="https://i.pinimg.com/736x/b3/f7/d1/b3f7d1787af6eb7708eef0b1548d967e.jpg"
          alt="Wedding bliss"
        />
      </div>
    </section>
  );
}
