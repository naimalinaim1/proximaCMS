import React from "react";
import {
  getSaveBannerInfo,
  getSaveHeaderInfo,
  getSaveHeroInfo,
  getSaveServicesInfo,
  getTitle,
} from "../utilities";

const Preview = () => {
  const title = getTitle();
  const header = getSaveHeaderInfo();
  const banner = getSaveBannerInfo();
  const hero = getSaveHeroInfo();
  const services = getSaveServicesInfo();

  const completeHeader = `
  <header class="w-[96%] max-w-[1280px] mx-auto flex justify-between py-6 border-b">
    <div class="md:flex justify-between items-center w-full">
      <div class="font-bold text-xl">${header?.logoName}</div>
      <nav class="space-x-4 cursor-pointer">
        ${header?.linkName.join("&nbsp;&nbsp;&nbsp;&nbsp;")}
      </nav>
    </div>
  </header>`;

  const completeBanner = `
  <section class="w-[96%] max-w-[1280px] mx-auto grid md:grid-cols-2 gap-4 items-center min-h-[500px] mt-10">
    <div>
      <h2 class="text-5xl text-[#111111] font-bold leading-[60px]">${banner?.title}</h2>
      <p class="text-lg text-gray-600 mt-4">${banner?.description}</p>
      <div class="mt-10 space-x-4">
        <button class="btn btn-info">${banner?.btnName[0]}</button>
        <button class="btn btn-outline btn-info">${banner?.btnName[1]}</button>
      </div>
    </div>
    <img src="${banner?.image}" alt="Banner image" class="w-full p-6 max-h-[500px]" />
  </section>`;

  const completeHero = `
  <section class="grid grid-cols-[500px_1fr] gap-6 items-center mt-24 w-[96%] max-w-[1280px] mx-auto">
    <img class="w-full max-h-[500px] pr-10 py-8 rounded-lg" src="${hero?.image}"/>
    <div>
      <h2 class="text-4xl font-bold leading-[60px]">${hero?.title}</h2>
      <p class="text-xl text-[#111111a1] mt-4 leading-8">${hero?.descriptions}</p>
      <button class="btn btn-info mt-8">${hero?.btnName}</button>
    </div>
  </section>`;

  const serviceItems = services?.services.map(
    (item) => `
      <div class="card border">
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
  <section class="w-[96%] max-w-[1280px] mx-auto mt-24">
    <h2 class="text-4xl font-bold text-center mb-10">${services?.title}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    ${serviceItems.join("")}
    </div>
  </section>`;

  const webPreviewCode =
    completeHeader + completeBanner + completeHero + completeServices;
  document.title = title;
  document.body.innerHTML = webPreviewCode;
  return <></>;
};

export default Preview;
