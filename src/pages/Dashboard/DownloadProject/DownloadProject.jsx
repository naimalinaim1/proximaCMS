import React from "react";
import { getForm, getHeader, getProjectInfo } from "../utilities";

const DownloadProject = () => {
  const getProject = getProjectInfo();

  const title = getProject.title;
  const header = getProject.header;
  const hero = getProject.hero;

  // create download formate header
  const getHeaderLink = header.headerLink.map((link) => link).join("");
  const makeHeader = `
  <header className="w-[96%] max-w-[1280px] mx-auto flex justify-between items-center py-6">
  <div className="font-bold text-xl">${header.logoName}</div>
  <nav className="flex space-x-4">
    ${getHeaderLink}
  </nav>
  </header>`;

  // create download formate hero
  const getParagraph = hero.descriptions
    .map((des) => `<p className="text-xl font-light mb-6 leading-8">${des}</p>`)
    .join("");

  const makeHero = `
  <section class="mt-16 text-center w-[96%] max-w-[1280px] mx-auto">
  <h2 className="w-[75%] mx-auto text-5xl font-bold leading-[60px] mb-6">
    ${hero.title}
  </h2>
    ${getParagraph}
  <button className="btn btn-info">${hero.btnName}</button>
  </section>`;

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
    <body>
      ${makeHeader}
      ${makeHero}
    </body>
    </html>`;

  // download project
  const handleDownload = () => {
    const text = completeCode.replaceAll("className", "class");
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
