import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const RightNav = () => {
  return (
    <nav>
      <h3 className="text-xl font-medium mb-6">Profile Info</h3>
      <nav className="space-y-4">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/profile">Profile</ActiveLink>
        <ActiveLink to="/change-password">Change Password</ActiveLink>
        <ActiveLink to="/settings">Account Setting</ActiveLink>
        <ActiveLink to="/activity">View Activity</ActiveLink>
        <ActiveLink to="/help">Help and Support</ActiveLink>
        <ActiveLink to="/logout">Logout</ActiveLink>
      </nav>
    </nav>
  );
};

export default RightNav;
