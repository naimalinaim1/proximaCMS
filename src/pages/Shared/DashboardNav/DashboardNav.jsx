import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const DashboardNav = () => {
  return (
    <nav>
      <h3 className="text-xl font-medium mb-6 uppercase">Dashboard Setting</h3>
      <nav className="space-y-4">
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
        <ActiveLink to="header">Header</ActiveLink>
        <ActiveLink to="hero">Hero</ActiveLink>
        <ActiveLink to="form">Form</ActiveLink>
        <ActiveLink to="download">Download Project</ActiveLink>
      </nav>
    </nav>
  );
};

export default DashboardNav;
