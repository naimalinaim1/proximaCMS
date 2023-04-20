import React from "react";
import { getForm, getHeader } from "../utilities";

const Preview = () => {
  const header = getHeader();
  const form = getForm();

  const webPreviewCode = header + form;
  document.body.innerHTML = webPreviewCode;
  return <></>;
};

export default Preview;
