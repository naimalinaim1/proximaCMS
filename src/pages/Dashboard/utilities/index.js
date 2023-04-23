// get save header information
const getSaveHeaderInfo = () => {
  const defaultHeader = {
    logoName: "Company Name",
    headerLink: [
      "<a href='/'>Home</a>",
      "<a href='about'>About</a>",
      "<a href='service'>Service</a>",
    ],
    linkAction: ["/", "about", "service"],
    linkName: ["Home", "About", "Service"],
  };

  const header = localStorage.getItem("header");
  if (header) {
    return JSON.parse(header);
  } else {
    return defaultHeader;
  }
};

// save header local storage
const saveHeader = (header) => {
  localStorage.setItem("header", JSON.stringify(header));
};

const getHeader = () => {
  const header = localStorage.getItem("header");
  return header;
};

const getForm = () => {
  const form = localStorage.getItem("form");
  return form;
};

export { getSaveHeaderInfo, saveHeader, getHeader, getForm };
