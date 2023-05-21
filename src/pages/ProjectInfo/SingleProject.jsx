import React, { useContext } from "react";
import { saveCurrentProject } from "./saveProjectInfo";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SingleProject = ({ projects, project, setProjects }) => {
  const { user } = useContext(AuthContext);

  // save current project
  const changeCurrentProject = (id) => {
    saveCurrentProject(id);
  };

  // delete project
  const handleDeleteProject = (id, name) => {
    // check confirm delete
    Swal.fire({
      title: `Please write your project name: ${name}`,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        const value = result.value.trim();
        if (value === name.trim()) {
          // delete a project by id
          fetch(
            `http://localhost:3000/deleteAProjectInfo?userEmail=${user.email}&projectId=${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Successfully",
                  "Project delete successfully",
                  "success"
                );
                const remaining = projects.filter((p) => p._id !== id);
                setProjects(remaining);
              }
            });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Project name is invalid",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      }
    });

    return;
  };

  const { _id, projectName, projectTitle } = project;
  return (
    <div className="flex flex-col rounded p-2 text-center border">
      <p className="text-2xl font-bold">{projectName}</p>
      <p className="text-sm mt-2 mb-6">{projectTitle}</p>
      <div className="mt-auto flex justify-between gap-1">
        <Link to="/dashboard" className="w-full">
          <button
            className="btn btn-info w-full"
            onClick={() => changeCurrentProject(_id)}
          >
            Open Project
          </button>
        </Link>
        <button
          onClick={() => handleDeleteProject(_id, projectName)}
          className="btn btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
