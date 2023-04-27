import React, { createContext, useEffect, useState } from "react";
import DSHero from "./DSHero";
import { getSaveHeroInfo, saveHero } from "../utilities";

export const DSHeroContext = createContext(null);

const DHero = () => {
  const makeHero = getSaveHeroInfo();
  const [hero, setHero] = useState(makeHero);

  const replaceText = (value) => {
    return value.replace("<", "&lt;").replace(">", "&gt;");
  };
  // change hero title
  const changeHeroTitle = (e) => {
    const title = replaceText(e.target.value);
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
    saveHero(hero);
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
          <h2 className="text-3xl font-bold">
            {hero.title.replace("&lt;", "<").replace("&gt;", ">")}
          </h2>
          <p className="text-[#111111a1] mt-4">{hero.descriptions}</p>
          <button className="btn btn-info mt-8">{hero.btnName}</button>
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
