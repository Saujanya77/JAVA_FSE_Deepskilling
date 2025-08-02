// src/ComplaintRegister.js
import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = Math.floor(Math.random() * 1000000);
    alert(
      `Complaint submitted successfully!\nReference Number: REF-${refNumber}`
    );

    // Clear form after submission
    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Raise a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name:</label><br />
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        /><br /><br />

        <label>Complaint:</label><br />
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          rows="5"
          required
        /><br /><br />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
