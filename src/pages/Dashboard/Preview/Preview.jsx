import React from "react";
import { getSaveHeaderInfo } from "../utilities";

const Preview = () => {
  const header = getSaveHeaderInfo();

  const completeHeader = `
  <header class="w-[96%] max-w-[1280px] mx-auto flex justify-between  py-6">
  <div class="md:flex justify-between items-center w-full">
    <div class="font-bold text-xl">${header.logoName}</div>
    <nav class="space-x-4 cursor-pointer">
      ${header.linkName.join("&nbsp;&nbsp;&nbsp;&nbsp;")}
    </nav>
  </div>
</header>`;

  const webPreviewCode = completeHeader;
  document.body.innerHTML = webPreviewCode;
  return <></>;
};

export default Preview;
