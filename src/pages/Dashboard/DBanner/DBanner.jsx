import React, { createContext, useEffect, useState } from "react";
import DSBanner from "./DSBanner";
import { getCurrentProject, saveBanner } from "../utilities";

export const DBSContext = createContext(null);

const DBanner = () => {
  const [banner, setBanner] = useState();
  const currentProjectId = getCurrentProject();

  // load project by id
  useEffect(() => {
    fetch(`http://localhost:3000/banner?id=${currentProjectId}`)
      .then((res) => res.json())
      .then((project) => setBanner(project.project.banner));
  }, [currentProjectId]);

  const changeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const btnNames = banner.btnName;

    // change button name
    if (name === "btnName1") {
      btnNames[0] = value;
      setBanner((preState) => ({ ...preState, btnName: btnNames }));
      return;
    } else if (name === "btnName2") {
      btnNames[1] = value;
      setBanner((preState) => ({ ...preState, btnName: btnNames }));
      return;
    }

    // change other
    setBanner((preState) => ({ ...preState, [name]: [value] }));
  };

  // save banner
  useEffect(() => {
    if (banner.update) {
      fetch(
        `http://localhost:3000/updateProject?id=${currentProjectId}&updateOption=banner`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(banner),
        }
      )
        .then((res) => res.json())
        .then((updateInfo) => {
          // update successfully
        });
    }
  }, [banner]);

  const DBSInfo = {
    banner,
    changeForm,
  };

  return (
    <>
      <section className="grid md:grid-cols-2 items-center gap-2 mb-10">
        <div>
          <h2 className="text-5xl font-bold leading-[60px]">{banner?.title}</h2>
          <p className="text-lg text-gray-600 mt-4">{banner?.description}</p>
          <div className="mt-8 space-x-4">
            <button className="btn btn-info">{banner?.btnName[0]}</button>
            <button className="btn btn-outline btn-info">
              {banner?.btnName[1]}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={banner?.image}
            alt="Banner image"
            className="w-full max-w-[430px] max-h-[430px]"
          />
        </div>
      </section>
      <DBSContext.Provider value={DBSInfo}>
        <DSBanner />
      </DBSContext.Provider>
    </>
  );
};

export default DBanner;
