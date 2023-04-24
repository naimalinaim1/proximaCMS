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

/* ----------------------------- hero section ---------------------------- */

// get save hero section information
const getSaveHeroInfo = () => {
  const defaultHero = {
    title: "My Hero Section on a Website?",
    descriptions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore recusandae modi, architecto quibusdam nesciunt vitae quia quo quod omnis cum veritatis placeat autem minima repellat, vel maxime! Voluptates nihil at natus labore esse, mollitia ipsam magni consequatur commodi doloribus est impedit soluta vel consequuntur sequi, architecto, rem obcaecati iusto in. Cumque harum quod labore provident reiciendis ipsum nostrum quis autem ipsam officiis possimus quisquam id, fugit blanditiis rerum ex?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore recusandae modi, architecto quibusdam nesciunt vitae quia quo quod omnis cum veritatis placeat autem minima repellat, vel maxime! Voluptates nihil at natus labore esse, mollitia ipsam magni consequatur commodi doloribus est impedit soluta vel consequuntur sequi, architecto, rem obcaecati iusto in. Cumque harum quod labore provident reiciendis ipsum nostrum quis autem ipsam officiis possimus quisquam id, fugit blanditiis rerum ex?",
    ],
    btnName: "Get Started",
  };

  const hero = localStorage.getItem("hero");
  if (hero) {
    return JSON.parse(hero);
  } else {
    return defaultHero;
  }
};

// save header local storage
const saveHero = (hero) => {
  localStorage.setItem("hero", JSON.stringify(hero));
};

const getForm = () => {
  const form = localStorage.getItem("form");
  return form;
};

export {
  getSaveHeaderInfo,
  saveHeader,
  getHeader,
  getSaveHeroInfo,
  saveHero,
  getForm,
};
