import React from "react";
import { getForm, getHeader } from "../utilities";

const DownloadProject = () => {
  const header = getHeader();
  const form = getForm();

  const allCode = header + form;
  const vanillaCode = allCode.replaceAll("className", "class");

  const completeCode = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.5/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${vanillaCode}
</body>
</html>`;

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
