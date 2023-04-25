// select file text
const getUploadFileText = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.onload = (event) => {
    const text = event.target.result;
    saveDeployProject(text);
  };

  reader.readAsText(file, "UTF-8");
};

// save file text
const saveDeployProject = (text) => {
  const files = {
    deployPage: text,
  };

  localStorage.setItem("deploy-file", JSON.stringify(files));
  setTimeout(() => {
    alert("Upload file successful!!!");
  }, 1000);
};

const getDeployProject = () => {
  const getProject = localStorage.getItem("deploy-file");
  if (getProject) {
    return JSON.parse(getProject);
  }
  return {};
};

const getProjectInfo = (userEmail = "") => {
  const path = window.location.href;
  const userId = userEmail.split("@")[0];
  const url = path + "/" + userId;

  return url;
};

export { getUploadFileText, getDeployProject, getProjectInfo };
