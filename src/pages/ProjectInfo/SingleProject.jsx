import React from "react";
import { saveCurrentProject } from "./saveProjectInfo";
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  // save current project
  const changeCurrentProject = (name) => {
    saveCurrentProject(name);
  };

  const { projectName, projectTitle } = project;
  return (
    <div className="rounded p-2 text-center border">
      <p className="text-2xl font-bold">{projectName}</p>
      <p className="text-sm mt-2 mb-6">{projectTitle}</p>
      <Link to="/dashboard">
        <button
          className="btn btn-info w-full"
          onClick={() => changeCurrentProject(projectName)}
        >
          Work This Project
        </button>
      </Link>
    </div>
  );
};

export default SingleProject;
