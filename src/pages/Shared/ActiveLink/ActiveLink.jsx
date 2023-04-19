import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 nav-link font-medium"
            : "nav-link font-medium hover:text-blue-400"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
