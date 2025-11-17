import React from "react";
import "./Shorts.css";

export default function Shorts() {
  const shortsList = [
    "https://www.youtube.com/embed/3jZ5vnv-LZc",
    "https://www.youtube.com/embed/sVPYIRF9RCQ",
    "https://www.youtube.com/embed/aqz-KE-bpKQ"
  ];

  return (
    <div className="shorts-container">
      {shortsList.map((url, index) => (
        <div key={index} className="short-card">
          <iframe
            src={url}
            title={`Short ${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}