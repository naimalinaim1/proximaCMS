import React from "react";
import {
  getSaveHeaderInfo,
  getSaveHeroInfo,
  getSaveServicesInfo,
  getTitle,
} from "../utilities";

const Preview = () => {
  const title = getTitle();
  const header = getSaveHeaderInfo();
  const hero = getSaveHeroInfo();
  const services = getSaveServicesInfo();

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
    <section class="mt-16 text-center w-[96%] max-w-[1280px] mx-auto">
      <h2 class="w-[75%] mx-auto text-5xl font-bold leading-[60px]">
        ${hero.title}
      </h2>
      <p class="text-xl font-light my-6 leading-8">${hero.descriptions[0]}</p>
      <p class="text-xl font-light mb-10 leading-8">${hero.descriptions[1]}</p>
      <button class="btn btn-primary">${hero.btnName}</button>
  </section>`;

  const serviceItems = services.services.map(
    (item) =>
      `<div class="card border">
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-text">${item.description}</p>
          <div class="flex items-center justify-between mt-4">
            <div>
              <span class="text-lg font-bold">${item.price}</span>
              <span class="text-gray-500 text-sm ml-2">${item.duration}</span>
            </div>
            <button class="btn btn-info">${item.btnName}</button>
          </div>
        </div>
      </div>`
  );

  const completeServices = `
  <section class="w-[96%]  max-w-[1280px] mx-auto mb-10">
  <h2 class="text-4xl font-bold text-center mt-14 mb-10">
    ${services.title}
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    ${serviceItems.join("")}
  </div>
</section>`;

  const webPreviewCode = completeHeader + completeHero + completeServices;
  document.title = title;
  document.body.innerHTML = webPreviewCode;
  return <></>;
};

export default Preview;
