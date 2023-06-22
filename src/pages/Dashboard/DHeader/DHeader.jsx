import React, { createContext, useEffect, useRef, useState } from "react";
import DSHeader from "./DSHeader";
import { getCurrentProject, getSaveHeaderInfo, saveHeader } from "../utilities";

export const DSHContext = createContext(null);

const DHeader = () => {
  const [header, setHeader] = useState({});
  const currentProjectId = getCurrentProject();

  // load project by id
  useEffect(() => {
    fetch(`http://localhost:3000/header?id=${currentProjectId}`)
      .then((res) => res.json())
      .then((project) => setHeader(project.project.header));
  }, [currentProjectId]);

  // change company logo
  const changeCompanyName = (e) => {
    const company = e.target.value;
    setHeader({ ...header, logoName: company });
  };

  const addNewLinkWithBtn = () => {
    setHeader((prevState) => ({
      ...prevState,
      linkName: [...prevState.linkName, ""],
    }));
  };

  // change link name
  const changeLinkName = (index, name, address) => {
    const newLinkAction = [...header.linkAction];
    const newLinkName = [...header.linkName];

    newLinkName[index] = name;
    newLinkAction[index] = address;

    const newHeader = {
      ...header,
      linkAction: newLinkAction,
      linkName: newLinkName,
    };
    setHeader(newHeader);
  };

  // delete link
  const deleteLink = (index) => {
    const previousLinkAction = [...header.linkAction];
    const previousLinkName = [...header.linkName];
    previousLinkAction.splice(index, 1);
    previousLinkName.splice(index, 1);
    const newHeader = {
      ...header,
      linkAction: previousLinkAction,
      linkName: previousLinkName,
    };
    setHeader(newHeader);
  };

  // save header
  useEffect(() => {
    if (header.update) {
      fetch(
        `http://localhost:3000/updateProject?id=${currentProjectId}&updateOption=header`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(header),
        }
      )
        .then((res) => res.json())
        .then((updateInfo) => {
          // update successfully
        });
    }
  }, [header]);

  const DSHInfo = {
    header,
    changeCompanyName,
    changeLinkName,
    deleteLink,
    addNewLinkWithBtn,
  };

  return (
    <div>
      <div>
        <header className="w-[96%] max-w-[1280px] mx-auto flex justify-between items-center pb-6">
          <div className="font-bold text-xl">{header.logoName}</div>
          <nav className="flex space-x-4">
            {header?.linkName?.map((lk, idx) => (
              <a className="cursor-pointer" key={idx}>
                {lk}
              </a>
            ))}
          </nav>
        </header>
      </div>
      <div className="mt-12">
        <DSHContext.Provider value={DSHInfo}>
          <DSHeader />
        </DSHContext.Provider>
      </div>
    </div>
  );
};

export default DHeader;
