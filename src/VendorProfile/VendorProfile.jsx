import React from "react";
import { useParams, Link } from "react-router-dom";

const vendors = [
  {
    slug: "blissful-blooms",
    name: "Blissful Blooms",
    category: "Florist",
    description:
      "Blissful Blooms offers stunning floral arrangements that bring your wedding dreams to life with elegance and freshness.",
    image: "https://i.pinimg.com/736x/10/33/69/10336944a933e99e545aad2a494a9199.jpg",
    contact: "contact@blissfulblooms.com",
  },
  {
    slug: "golden-lens-studio",
    name: "Golden Lens Studio",
    category: "Photography",
    description:
      "Golden Lens Studio captures every magical moment of your special day with a creative and artistic touch.",
    image: "https://i.pinimg.com/736x/34/fe/ba/34feba7ae4378f749492513110dda696.jpg",
    contact: "hello@goldenlens.com",
  },
  {
    slug: "delightful-bites",
    name: "Delightful Bites",
    category: "Catering",
    description:
      "Delightful Bites serves delicious and beautifully crafted catering options to delight every palate.",
    image: "https://i.pinimg.com/736x/eb/53/ff/eb53ffdae4205dec55f8d2777666ea97.jpg",
    contact: "info@delightfulbites.com",
  },
  {
    slug: "elegant-events",
    name: "Elegant Events",
    category: "Decor & Planning",
    description:
      "Elegant Events brings your wedding vision to life with exquisite décor and expert planning.",
    image: "https://i.pinimg.com/736x/04/96/93/04969381ef0044150c68c5dc05e5fb46.jpg",
    contact: "contact@elegantevents.com",
  },
  {
    slug: "charming-chapel",
    name: "Charming Chapel",
    category: "Venue",
    description:
      "Charming Chapel offers a picturesque and intimate setting for your dream wedding ceremony.",
    image: "https://i.pinimg.com/736x/22/1b/91/221b9168fa9d87f71b6f2e1edeb60b01.jpg",
    contact: "info@charmingchapel.com",
  },
  {
    slug: "melody-music",
    name: "Melody Music",
    category: "DJ & Live Music",
    description:
      "Melody Music provides high-energy DJs and live bands to keep your celebration unforgettable.",
    image: "https://i.pinimg.com/736x/fb/62/3d/fb623d166b08a2a5ff265e4421e5c4b7.jpg",
    contact: "book@melodymusic.com",
  },
  {
    slug: "sweet-tooth-bakery",
    name: "Sweet Tooth Bakery",
    category: "Cake Designer",
    description:
      "Sweet Tooth Bakery creates beautiful and delicious custom wedding cakes tailored to your style.",
    image: "https://i.pinimg.com/736x/3a/ce/3e/3ace3e4e9c9dbf519bcda3f8b56e3e40.jpg",
    contact: "orders@sweettoothbakery.com",
  },
  {
    slug: "luxury-limos",
    name: "Luxury Limos",
    category: "Transportation",
    description:
      "Luxury Limos offers premium transportation services with elegant vehicles for your special day.",
    image: "https://i.pinimg.com/736x/0b/9f/42/0b9f42fcd3a6f7498b486b4dbde51be3.jpg",
    contact: "contact@luxurylimos.com",
  },
  {
    slug: "glamour-hair",
    name: "Glamour Hair Studio",
    category: "Hair & Makeup",
    description:
      "Glamour Hair Studio specializes in bridal hair and makeup to make you look stunning on your wedding day.",
    image: "https://i.pinimg.com/736x/d6/3e/22/d63e2242d77c06c42fa01be1e2ad03a3.jpg",
    contact: "appointments@glamourhair.com",
  },
  {
    slug: "timeless-tuxedos",
    name: "Timeless Tuxedos",
    category: "Menswear",
    description:
      "Timeless Tuxedos offers stylish and tailored tuxedo rentals and sales to keep the groom sharp.",
    image: "https://i.pinimg.com/736x/0e/16/0e/0e160e3bcdb7a758c77a15297db7aeff.jpg",
    contact: "info@timelesstuxedos.com",
  },
];


export default function VendorProfile() {
  const { vendorSlug } = useParams();
  const vendor = vendors.find((v) => v.slug === vendorSlug);

  if (!vendor) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Vendor Not Found</h2>
        <Link to="/vendors">Back to Vendors</Link>
      </div>
    );
  }

  return (
    <section style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <Link to="/vendors" style={{ display: "inline-block", marginBottom: "1rem", color: "#f39c12" }}>
        &larr; Back to Vendors
      </Link>
      <h2>{vendor.name}</h2>
      <img
        src={vendor.image}
        alt={vendor.name}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }}
      />
      <p><strong>Category:</strong> {vendor.category}</p>
      <p>{vendor.description}</p>
      <p><strong>Contact:</strong> {vendor.contact}</p>
    </section>
  );
}
