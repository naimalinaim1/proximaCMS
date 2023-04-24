import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentProject } from "../pages/Dashboard/utilities";

const PrivateDashboardRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentProject = getCurrentProject();
    if (!currentProject) {
      navigate("/project-info");
    }
  }, []);

  return children;
};

export default PrivateDashboardRoute;
