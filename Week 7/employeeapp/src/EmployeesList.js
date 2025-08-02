// src/EmployeesList.js
import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeesList = () => {
  const employees = [
    { id: 1, name: "Suji", role: "Backend Dev" },
    { id: 2, name: "Ankit", role: "Frontend Dev" },
    { id: 3, name: "Megha", role: "UI/UX" },
  ];

  return (
    <div>
      <h2>Team List</h2>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeesList;
