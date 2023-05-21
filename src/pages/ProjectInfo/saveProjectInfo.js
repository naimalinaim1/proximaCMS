const saveProjectInfo = (name, title) => {
  const myProject = getSaveProject();

  //   create a new project
  const newProject = {
    projectName: name,
    projectTitle: title,
  };

  //   check new project name is already exist
  const isExistProject = myProject.find(
    (project) => project.projectName === name
  );
  if (isExistProject) {
    return false;
  } else {
    myProject.push(newProject);
  }
  // save project local storage
  saveCurrentProject(name);
  localStorage.setItem("create-project", JSON.stringify(myProject));

  return true;
};

// get save project
const getSaveProject = () => {
  const getProject = localStorage.getItem("create-project");
  if (getProject) {
    return JSON.parse(getProject);
  }
  return [];
};

// project id get mongodb
const saveCurrentProject = (projectId) => {
  localStorage.setItem("current-project", projectId);
};

const deleteProject = (name) => {
  const projects = getSaveProject();
  const remainingProjects = projects.filter(
    (project) => project.projectName !== name
  );

  // remove project using project name
  localStorage.removeItem(name);
  // remove current project name
  localStorage.removeItem("current-project");
  // set remaining project
  localStorage.setItem("create-project", JSON.stringify(remainingProjects));
};

export { saveProjectInfo, getSaveProject, saveCurrentProject, deleteProject };
