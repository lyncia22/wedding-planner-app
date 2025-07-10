import React from "react";
import "./ToolsSection.css";
import { Link } from "react-router-dom"; // assuming you're using React Router

export default function ToolsSection() {
  // Example progress - in a real app, you'll calculate this dynamically
  const completedTasks = 7;
  const totalTasks = 10;
  const progress = Math.round((completedTasks / totalTasks) * 100);

  const tools = [
    { name: "Budget Tracker", link: "/budget", icon: "💰" },
    { name: "Checklist", link: "/checklist", icon: "📝" },
    { name: "Vendors", link: "/vendors", icon: "🏢" },
    { name: "Settings", link: "/settings", icon: "⚙️" },
  ];

  return (
    <section className="tools-section">
      <h2>Your Wedding Planner Tools</h2>

      <div className="progress-bar-container">
        <p>Progress: {progress}%</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="tools-grid">
        {tools.map((tool) => (
          <Link to={tool.link} className="tool-card" key={tool.name}>
            <div className="tool-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
