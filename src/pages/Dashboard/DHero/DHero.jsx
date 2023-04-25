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
  const changeFirstDescription = (e) => {
    const des = e.target.value;
    const previousDes = hero.descriptions;
    const descriptions = [des, previousDes[1]];

    setHero((prevState) => ({
      ...prevState,
      descriptions,
    }));
  };

  // change second description
  const changeSecondDescription = (e) => {
    const des = e.target.value;
    const previousDes = hero.descriptions;
    const descriptions = [previousDes[0], des];

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

  // hero info
  const DSHeroInfo = {
    hero,
    changeHeroTitle,
    changeFirstDescription,
    changeSecondDescription,
    changeButtonName,
  };

  // save hero local storage
  useEffect(() => {
    saveHero(hero);
  }, [hero]);

  return (
    <>
      <section className="mt-12 w-[96%] max-w-[1280px] mx-auto text-center">
        <h2 className="w-[75%] mx-auto text-5xl font-bold leading-[60px]">
          {hero.title.replace("&lt;", "<").replace("&gt;", ">")}
        </h2>
        {hero.descriptions.map((des, index) => (
          <p key={index} className="text-xl font-light my-5 leading-8">
            {des}
          </p>
        ))}

        <button className="btn btn-primary">{hero.btnName}</button>
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
