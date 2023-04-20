const getHeader = () => {
  const header = localStorage.getItem("header");
  return header;
};

const getForm = () => {
  const form = localStorage.getItem("form");
  return form;
};

export { getHeader, getForm };
