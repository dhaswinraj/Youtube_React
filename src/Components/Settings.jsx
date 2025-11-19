import React from "react";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      <div className="settings-section">
        <h3>Account</h3>
        <p>Manage your account information and preferences.</p>
      </div>

      <div className="settings-section">
        <h3>Notifications</h3>
        <p>Choose when to receive alerts and updates.</p>
      </div>

      <div className="settings-section">
        <h3>Privacy</h3>
        <p>Control your privacy and data settings.</p>
      </div>

      <div className="settings-section">
        <h3>Playback & Performance</h3>
        <p>Adjust video playback quality, captions, and more.</p>
      </div>
    </div>
  );
}
