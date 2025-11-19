import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your feedback!");
    setMessage("");
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Send Feedback</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>Your Feedback</label>
        <textarea
          className="feedback-textarea"
          placeholder="Describe your issue or share your ideas..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" className="feedback-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
