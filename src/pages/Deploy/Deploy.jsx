import React, { useContext, useEffect, useState } from "react";
import {
  getDeployProject,
  getProjectInfo,
  getUploadFileText,
} from "./DeploySetting";
import { AuthContext } from "../../provider/AuthProvider";

const Deploy = () => {
  const { user } = useContext(AuthContext);

  const [isDeploy, setIsDeploy] = useState(false);
  const [webUrl, setWebUrl] = useState(null);

  // handle select file to get text
  const handleUploadFileText = (e) => {
    getUploadFileText(e);
    setIsDeployUpload();
  };

  // get deploy text
  useEffect(() => {
    const projects = getDeployProject();
    const exist = projects?.deployPage;
    if (exist) {
      setIsDeploy(true);
    }
  }, []);

  // get project info
  useEffect(() => {
    const projectInfo = getProjectInfo(user?.email);
    setWebUrl(projectInfo);
    // setProjectInfo();
  }, [user]);

  // deploy file and code rerender
  const setIsDeployUpload = () => {
    setIsDeploy(true);
  };

  const goLiveSite = () => {
    window.open(webUrl, "_blank");
  };

  return (
    <>
      <div className="mt-20 w-[96%] max-w-[1280px] mx-auto">
        <div className="mb-10">
          {isDeploy ? (
            <>
              <p className="text-3xl font-medium text-info">
                Deploy one project
              </p>
              {webUrl && (
                <>
                  <p className="text-lg mt-2">
                    Live site:{" "}
                    <span
                      onClick={goLiveSite}
                      className="text-info cursor-pointer"
                    >
                      {webUrl}
                    </span>
                  </p>
                </>
              )}
            </>
          ) : (
            <p className="text-3xl font-medium text-error">No Deploy project</p>
          )}
        </div>

        {/* deploy text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Deploy Your site</h1>
          <p className="text-lg mb-8 text-red-400 text-justify">
            You can deploy one file and again deploy to replace it.
          </p>
          <p className="text-lg mb-8 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor.
            Nullam quis cursus dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem cupiditate modi sequi sapiente id, porro quas ut at
            possimus debitis?
          </p>
          <p className="text-lg mb-8 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor.
            Nullam quis cursus dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem cupiditate modi sequi sapiente id, porro quas ut at
            possimus debitis?
          </p>
          <p className="text-lg mb-8 text-gray-600 text-justify">
            You can deploy only index.html file
          </p>
        </div>

        {/* deploy setting */}
        <div className="block w-[50%] mx-auto py-14 mt-10 text-gray-500  border shadow-lg rounded-2xl text-center">
          <p>Want to deploy a new site without connecting to Git? </p>
          <p>Drag and drop your site output folder here </p>
          <p className="dropzone-browse">
            Or,{" "}
            <label
              className="underline hover:no-underline font-bold cursor-pointer"
              htmlFor="dropzone-upload"
            >
              browse to upload
            </label>
            <input
              onChange={handleUploadFileText}
              className="hidden"
              type="file"
              name="file"
              id="dropzone-upload"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Deploy;
