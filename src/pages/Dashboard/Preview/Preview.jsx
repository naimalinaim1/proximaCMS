import React from "react";
import {
  getSaveBannerInfo,
  getSaveFooterInfo,
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
  const footer = getSaveFooterInfo();

  // ${header?.linkName.join("&nbsp;&nbsp;&nbsp;&nbsp;")}
  const completeHeader = `
  <header class="w-[96%] max-w-[1280px] mx-auto flex justify-between py-6 border-b">
    <div class="md:flex justify-between items-center w-full">
      <div class="font-bold text-xl">${header?.logoName}</div>
      <nav class="space-x-4 cursor-pointer">
      ${header?.linkName
        ?.map(
          (link) => `<a class="font-medium hover:text-blue-400">${link}</a>`
        )
        .join("")}
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

  const completeFooter = `
  <div class="bg-info mt-24">
  <footer class="footer py-14 w-[96%] max-w-[1280px] mx-auto  text-base-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p class="mt-2">${footer?.companyName}<br/>${footer?.sinceDate}</p>
  </div> 
  <div>
    <span class="text-2xl font-bold text-white/90 mb-2">${
      footer?.footerLinks[0]?.linkTitle
    }</span> 
    ${footer?.footerLinks[0]?.linkNames
      ?.map((linkName) => `<a class="link link-hover">${linkName}</a>`)
      .join("")}
  </div> 
  <div>
    <span class="text-2xl font-bold text-white/90 mb-2">${
      footer?.footerLinks[1]?.linkTitle
    }</span> 
    ${footer?.footerLinks[1]?.linkNames
      ?.map((linkName) => `<a class="link link-hover">${linkName}</a>`)
      .join("")}
  </div> 
  <div>
    <span class="text-2xl font-bold text-white/90 mb-2">${
      footer?.footerLinks[2]?.linkTitle
    }</span> 
    ${footer?.footerLinks[2]?.linkNames
      ?.map((linkName) => `<a class="link link-hover">${linkName}</a>`)
      .join("")}
  </div>
  </footer>
  </div>`;

  const webPreviewCode =
    completeHeader +
    completeBanner +
    completeHero +
    completeServices +
    completeFooter;
  document.title = title;
  document.body.innerHTML = webPreviewCode;
  return <></>;
};

export default Preview;
