import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentProject } from "../utilities";

const DefaultDashboard = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState("");

  useEffect(() => {
    // get current project
    const getCurrentPro = getCurrentProject();
    setCurrentProject(getCurrentPro);
    if (!getCurrentPro) {
      navigate("/project-info");
    }
  }, []);

  return (
    <div className="pr-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to ECCE</h1>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Current Project: <span className="text-info">{currentProject}</span>
      </p>
      <Link to="header">
        <button className="btn btn-info">Next Step</button>
      </Link>
    </div>
  );
};

export default DefaultDashboard;
