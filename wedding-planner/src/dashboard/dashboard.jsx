import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Wedding Highlights",
    src: "https://videos.pexels.com/video-files/28830717/12488901_2560_1440_24fps.mp4",
    thumbnail: "/thumbnails/thumb1.jpg", // And public/thumbnails
  },
  {
    id: 2,
    title: "Reception Moments",
    src: "/videos/wedding2.mp4",
    thumbnail: "/thumbnails/thumb2.jpg",
  },
  {
    id: 3,
    title: "Ceremony Clips",
    src: "/videos/wedding3.mp4",
    thumbnail: "/thumbnails/thumb3.jpg",
  },
];

export default function Dashboard() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Your Wedding Videos</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: "100%", display: "block" }}
            />
            <h3 style={{ padding: "10px", margin: 0, background: "#f4c542", color: "#222", fontWeight: "700", textAlign: "center" }}>
              {video.title}
            </h3>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <video
            src={selectedVideo.src}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking video
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              borderRadius: "12px",
              boxShadow: "0 0 30px rgba(255,255,255,0.6)",
            }}
          />
        </div>
      )}
    </div>
  );
}
