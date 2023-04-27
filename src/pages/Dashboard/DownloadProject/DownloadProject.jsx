import React from "react";
import { getForm, getHeader, getProjectInfo } from "../utilities";

const DownloadProject = () => {
  const getProject = getProjectInfo();

  const title = getProject?.title;
  const header = getProject?.header;
  const banner = getProject?.banner;
  const hero = getProject?.hero;
  const services = getProject?.service;

  // create download formate header
  const getHeaderLink = header.headerLink.map((link) => link).join("");
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

  const htmlCode = `
    <!-- header -->
    <header class="flex justify-between items-center py-6">
      <div class="font-bold text-xl">${header.logoName}</div>
      <nav class="flex space-x-4">
        ${getHeaderLink}
      </nav>
    </header>

    <!-- banner section -->
    <section class="grid md:grid-cols-2 gap-4 items-center min-h-[500px] mt-10">
      <div>
        <h2 class="text-5xl text-[#111111] font-bold leading-[60px]">${
          banner?.title
        }</h2>
        <p class="text-lg text-gray-600 mt-4">${banner?.description}</p>
        <div class="mt-10 space-x-4">
          <button class="btn btn-info">${banner?.btnName[0]}</button>
          <button class="btn btn-outline btn-info">${
            banner?.btnName[1]
          }</button>
        </div>
      </div>
      <img src="${
        banner?.image
      }" alt="Banner image" class="w-full p-6 max-h-[500px]" />
    </section>

    <!-- hero section -->
    <section class="grid grid-cols-[500px_1fr] gap-6 items-center mt-24">
      <img class="w-full max-h-[500px] pr-10 py-8 rounded-lg" src="${
        hero?.image
      }"/>
      <div>
        <h2 class="text-4xl font-bold leading-[60px]">${hero?.title}</h2>
        <p class="text-xl text-[#111111a1] mt-4 leading-8">${
          hero?.descriptions
        }</p>
        <button class="btn btn-info mt-8">${hero?.btnName}</button>
      </div>
    </section>

    <!-- services section -->
    <section class="w-[96%] max-w-[1280px] mx-auto mt-24">
      <h2 class="text-4xl font-bold text-center mb-10">${services?.title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      ${serviceItems.join("")}
      </div>
    </section>
  `;

  // complete code
  const completeCode = `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.5/dist/full.css" rel="stylesheet" type="text/css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <title>${title}</title>
    </head>
    <body class="w-[96%] max-w-[1280px] mx-auto">
      ${htmlCode}
    </body>
    </html>`;

  // download project
  const handleDownload = () => {
    const text = completeCode;
    const filename = "index.html";

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2 className="text-2xl font-medium">Ready Your Project</h2>
      <p className="text-lg mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        molestias. Id alias repudiandae dolores, illo architecto possimus.
        Delectus perferendis neque et numquam nam! Amet recusandae laudantium
        numquam autem voluptatibus dolores nemo id veritatis similique
        perferendis!
      </p>
      <p className="text-lg mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        sapiente, aliquam omnis quidem ipsam, perferendis odit error quas
        facere, accusamus ratione eius iste velit eligendi numquam pariatur.
        Necessitatibus, quibusdam. Amet dolor pariatur libero autem totam
        dignissimos assumenda deleniti, temporibus, ut cum illo harum unde dicta
        facilis! Voluptatibus facilis cumque commodi sapiente magni vel
        explicabo ex!
      </p>
      <p className="text-lg mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
        voluptatibus tempora libero quia cumque impedit sed eos quaerat magni
        ab, fugiat magnam incidunt provident blanditiis.
      </p>
      <div className="mt-10">
        <p className="text-xl font-thin">Please download your project</p>
        <button onClick={handleDownload} className="btn btn-success mt-4">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default DownloadProject;
