import React from "react";
import { getSaveHeaderInfo, getSaveHeroInfo, getTitle } from "../utilities";

const Preview = () => {
  const title = getTitle();
  const header = getSaveHeaderInfo();
  const hero = getSaveHeroInfo();

  const completeHeader = `
  <header class="w-[96%] max-w-[1280px] mx-auto flex justify-between  py-6">
  <div class="md:flex justify-between items-center w-full">
    <div class="font-bold text-xl">${header.logoName}</div>
    <nav class="space-x-4 cursor-pointer">
      ${header.linkName.join("&nbsp;&nbsp;&nbsp;&nbsp;")}
    </nav>
  </div>
</header>`;

  const completeHero = `
    <section class="mt-16 text-center w-[90%] mx-auto">
      <h2 class="w-[75%] mx-auto text-5xl font-bold leading-[60px]">
        ${hero.title}
      </h2>
      <p class="text-xl font-light my-6 leading-8 text-justify">${hero.descriptions[0]}</p>
      <p class="text-xl font-light mb-10 leading-8 text-justify">${hero.descriptions[1]}</p>
      <button class="btn btn-primary">${hero.btnName}</button>
    </section>`;

  const webPreviewCode = completeHeader + completeHero;
  document.title = title;
  document.body.innerHTML = webPreviewCode;
  return <></>;
};

export default Preview;
