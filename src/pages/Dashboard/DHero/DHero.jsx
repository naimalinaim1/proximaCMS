import React, { createContext, useEffect, useState } from "react";
import DSHero from "./DSHero";
import { getCurrentProject, saveHero } from "../utilities";

export const DSHeroContext = createContext(null);

const DHero = () => {
  const [hero, setHero] = useState({});
  const currentProjectId = getCurrentProject();
  // load project by id
  useEffect(() => {
    fetch(`http://localhost:3000/hero?id=${currentProjectId}`)
      .then((res) => res.json())
      .then((project) => setHero(project.project.hero));
  }, [currentProjectId]);

  // change hero title
  const changeHeroTitle = (e) => {
    const title = e.target.value;
    setHero({ ...hero, title });
  };

  // change first description
  const changeDescription = (e) => {
    const descriptions = e.target.value;

    setHero((prevState) => ({
      ...prevState,
      descriptions,
    }));
  };

  // change button name
  const changeButtonName = (e) => {
    const btnName = e.target.value;
    setHero({ ...hero, btnName });
  };

  // change image
  const changeImage = (e) => {
    const image = e.target.value;
    setHero({ ...hero, image });
  };

  // hero info
  const DSHeroInfo = {
    hero,
    changeHeroTitle,
    changeDescription,
    changeButtonName,
    changeImage,
  };

  // save hero local storage
  useEffect(() => {
    if (hero.update) {
      fetch(
        `http://localhost:3000/updateProject?id=${currentProjectId}&updateOption=hero`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(hero),
        }
      )
        .then((res) => res.json())
        .then((updateInfo) => {
          // update successfully
        });
    }
  }, [hero]);

  return (
    <>
      <section className="w-[96%] max-w-[1280px] mx-auto grid grid-cols-[2fr_3fr] gap-6 items-center">
        <img
          className="w-full rounded-lg max-h-[400px]"
          src={hero?.image}
          alt="No hero image found"
        />
        <div>
          <h2 className="text-3xl font-bold">{hero?.title}</h2>
          <p className="text-[#111111a1] mt-4">{hero?.descriptions}</p>
          <button className="btn btn-info mt-8">{hero?.btnName}</button>
        </div>
      </section>

      <div className="mt-10">
        <DSHeroContext.Provider value={DSHeroInfo}>
          <DSHero />
        </DSHeroContext.Provider>
      </div>
    </>
  );
};

export default DHero;
