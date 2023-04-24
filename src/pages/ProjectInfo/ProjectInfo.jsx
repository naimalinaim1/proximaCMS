import React, { useState } from "react";
import { getSaveProject, saveProjectInfo } from "./saveProjectInfo";
import { useNavigate } from "react-router-dom";
import SingleProject from "./SingleProject";

const ProjectInfo = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  //   get all project from local storage
  const projects = getSaveProject();

  //   handle create new project
  const handleCreateProject = (e) => {
    e.preventDefault();

    const form = e.target;
    const projectName = form.name.value.trim().toLowerCase();
    const projectTitle = form.title.value.trim();

    if (projectName.length > 0 && projectTitle.length > 0) {
      // save project in local storage
      const create = saveProjectInfo(projectName, projectTitle);
      if (create) {
        navigate("/dashboard");
      } else {
        setError("Project name is already exist!!!");
      }
    }
  };

  return (
    <div className="w-[96%] max-w-[1100px] mx-auto my-10">
      <h2 className="text-4xl font-medium mb-4">Create a new Project</h2>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>

      <div>
        <h2 className="text-xl font-medium">View My Projects</h2>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </div>
      {/* create new project */}
      <form
        onSubmit={handleCreateProject}
        className="flex flex-col space-y-4  w-[90%] max-w-[550px] mt-20 mx-auto border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-xl font-bold text-center border-b pb-2">
          Create new Project
        </h3>
        <label className="text-lg font-medium">Project Name:</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          className="p-2 border rounded-md"
          required
        />
        <label className="text-lg font-medium">Project Title:</label>
        <input
          type="text"
          name="title"
          autoComplete="off"
          className="p-2 border rounded-md"
          required
        />
        <input
          value="Create New Project"
          type="submit"
          className="btn btn-info"
        />
        <p className="text-error">{error}</p>
      </form>
    </div>
  );
};

export default ProjectInfo;
