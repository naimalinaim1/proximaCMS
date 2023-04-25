import React from "react";
import { getDeployProject } from "./DeploySetting";

const DeployPreview = () => {
  const deployFile = getDeployProject().deployPage;
  document.body.innerHTML = deployFile;

  return <></>;
};

export default DeployPreview;
