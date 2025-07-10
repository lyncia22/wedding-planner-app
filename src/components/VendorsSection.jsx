import React from "react";
import { Link } from "react-router-dom";
import "./VendorsSection.css";

export default function VendorsSection() {
  const vendors = [
    {
      name: "Blissful Blooms",
      slug: "blissful-blooms",
      category: "Florist",
      image: "https://i.pinimg.com/736x/10/33/69/10336944a933e99e545aad2a494a9199.jpg",
    },
    {
      name: "Golden Lens Studio",
      slug: "golden-lens-studio",
      category: "Photography",
      image: "https://i.pinimg.com/736x/34/fe/ba/34feba7ae4378f749492513110dda696.jpg",
    },
    {
      name: "Delightful Bites",
      slug: "delightful-bites",
      category: "Catering",
      image: "https://i.pinimg.com/736x/eb/53/ff/eb53ffdae4205dec55f8d2777666ea97.jpg",
    },
    {
      name: "Elegant Events",
      slug: "elegant-events",
      category: "Decor & Planning",
      image: "https://i.pinimg.com/736x/04/96/93/04969381ef0044150c68c5dc05e5fb46.jpg",
    },
  ];

  return (
    <section className="vendors-section">
      <h2>Meet Our Vendors</h2>
      <div className="vendors-grid">
        {vendors.map((vendor) => (
          <Link
            to={`/vendors/${vendor.slug}`}
            className="vendor-card"
            key={vendor.slug}
          >
            <img src={vendor.image} alt={vendor.name} />
            <h3>{vendor.name}</h3>
            <p>{vendor.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
