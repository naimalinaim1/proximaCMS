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

const saveCurrentProject = (name) => {
  localStorage.setItem("current-project", name);
};

export { saveProjectInfo, getSaveProject, saveCurrentProject };
