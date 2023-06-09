// get current project
const getCurrentProject = () => {
  const currentProject = localStorage.getItem("current-project");
  return currentProject;
};

// get project title
const getTitle = () => {
  const currentProject = getCurrentProject();
  const getAllProject = localStorage.getItem("create-project");
  if (getAllProject) {
    const projects = JSON.parse(getAllProject);
    const findProject = projects.find(
      (project) => project?.projectName === currentProject
    );

    const title = findProject?.projectTitle;
    return title;
  }

  return "Blank Title";
};

const getDefaultProjectInfo = () => {
  const defaultHeader = {
    logoName: "Company Name",
    linkAction: ["/", "about", "service"],
    linkName: ["Home", "About", "Service"],
  };

  const defaultBanner = {
    title: "Get involved Become a Trader.",
    description:
      "We Allows Our User to Conduct Financial Transactions Online. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore recusandae modi, architecto quibusdam nesciunt vitae quia quo quod omnis cum veritatis placeat.",
    btnName: ["Get Started", "Watch A Trailer"],
    image:
      "https://img.freepik.com/free-vector/chatting-concept-illustration_114360-500.jpg",
  };

  const defaultHero = {
    title: "My Hero Section on a Website?",
    descriptions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore recusandae modi, architecto quibusdam nesciunt vitae quia quo quod omnis cum veritatis placeat autem minima repellat, vel maxime! Voluptates nihil at natus labore esse, mollitia ipsam magni consequatur commodi doloribus est impedit soluta vel consequuntur sequi, architecto, rem obcaecati iusto in. Cumque harum quod labore provident reiciendis ipsum nostrum quis autem ipsam officiis possimus quisquam id, fugit blanditiis rerum ex?",
    btnName: "Get Started",
    image:
      "https://img.freepik.com/free-vector/chatting-concept-illustration_114360-89.jpg",
  };

  const defaultServices = {
    title: "Explore Our Services",
    services: [
      {
        id: 1,
        title: "Web Development",
        description:
          "We specialize in building responsive websites that are optimized for performance and user experience. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores asperiores, ducimus, inventore quam possimus odio aut culpa sequi praesentium expedita maiores debitis amet nam reiciendis ad magni, voluptatum natus nesciunt. Aperiam velit eos obcaecati.",
        price: "$100/hour",
        duration: "2-4 weeks",
        btnName: "Explore",
      },
      {
        id: 2,
        title: "Mobile Development",
        description:
          "We develop native and hybrid mobile applications for iOS and Android platforms. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores asperiores, ducimus, inventore quam possimus odio aut culpa sequi praesentium expedita maiores debitis amet nam reiciendis ad magni, voluptatum natus nesciunt. Aperiam velit eos obcaecati.",
        price: "$120/hour",
        duration: "4-6 weeks",
        btnName: "Explore",
      },
      {
        id: 3,
        title: "Custom ECCE Development",
        description:
          "We provide custom ECCE development services to help you create a unique and powerful website. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores asperiores, ducimus, inventore quam possimus odio aut culpa sequi praesentium expedita maiores debitis amet nam reiciendis ad magni, voluptatum natus nesciunt. Aperiam velit eos obcaecati.",
        price: "$80/hour",
        duration: "2-3 weeks",
        btnName: "Explore",
      },
      {
        id: 4,
        title: "Computer Science Consulting",
        description:
          "We offer consulting services to help businesses and organizations with computer science projects and initiatives. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores asperiores, ducimus, inventore quam possimus odio aut culpa sequi praesentium expedita maiores debitis amet nam reiciendis ad magni, voluptatum natus nesciunt. Aperiam velit eos obcaecati.",
        price: "$150/hour",
        duration: "1-2 weeks",
        btnName: "Explore",
      },
    ],
  };

  const defaultFooter = {
    companyName: "ACME Industries Ltd.",
    sinceDate: "Providing reliable tech since 1992",
    footerLinks: [
      {
        linkTitle: "Services",
        linkNames: ["Branding", "Design", "Marketing", "Advertisement"],
        linkActions: ["branding", "design", "marketing", "advertisement"],
      },
      {
        linkTitle: "Company",
        linkNames: ["About us", "Contact", "Jobs", "Press kit"],
        linkActions: ["about-us", "contact", "jobs", "press-kit"],
      },
      {
        linkTitle: "Legal",
        linkNames: ["Terms of use", "Privacy policy", "Cookie policy"],
        linkActions: ["terms", "privacy-policy", "cookie-policy"],
      },
    ],
  };

  const defaultProject = {
    title: "Blank Title",
    header: defaultHeader,
    banner: defaultBanner,
    hero: defaultHero,
    service: defaultServices,
    footer: defaultFooter,
  };

  return defaultProject;
};

// get current project
const getProjectInfo = () => {
  const defaultProject = getDefaultProjectInfo();

  // get current project name
  const currentProject = getCurrentProject();

  // get current project form local storage
  const getProjectFromLS = localStorage.getItem(currentProject);
  if (getProjectFromLS) {
    return JSON.parse(getProjectFromLS);
  }

  return defaultProject;
};

// get save header information
const getSaveHeaderInfo = () => {
  const project = getProjectInfo();
  const header = project.header;
  return header;
};

// save header local storage
const saveHeader = (header) => {
  const title = getTitle();
  const saveProject = getProjectInfo();
  const projectName = getCurrentProject();

  // set project header
  saveProject.title = title;
  saveProject.header = header;
  localStorage.setItem(projectName, JSON.stringify(saveProject));
};

const getHeader = () => {
  const header = localStorage.getItem("header");
  return header;
};
/* ----------------------------- banner section ---------------------------- */
// get save banner section information
const getSaveBannerInfo = () => {
  const project = getProjectInfo();
  const banner = project.banner;
  return banner;
};

// save banner
const saveBanner = (banner) => {
  const saveProject = getProjectInfo();
  const projectName = getCurrentProject();

  // save banner
  saveProject.banner = banner;
  localStorage.setItem(projectName, JSON.stringify(saveProject));
};

/* ----------------------------- hero section ---------------------------- */

// get save hero section information
const getSaveHeroInfo = () => {
  const project = getProjectInfo();
  const hero = project.hero;
  return hero;
};

// save hero local storage
const saveHero = (hero) => {
  const saveProject = getProjectInfo();
  const projectName = getCurrentProject();

  // set project hero
  saveProject.hero = hero;
  localStorage.setItem(projectName, JSON.stringify(saveProject));
};

/* ----------------------------- service section ---------------------------- */
// get save services section information
const getSaveServicesInfo = () => {
  const project = getProjectInfo();
  const service = project.service;
  return service;
};

const saveServices = (services) => {
  const saveProject = getProjectInfo();
  const projectName = getCurrentProject();

  // set project services
  saveProject.service = services;
  localStorage.setItem(projectName, JSON.stringify(saveProject));
};

// load services data
const loadServiceData = (id) => {
  const project = getSaveServicesInfo();
  const services = project;

  return [services, id];
};

/* ----------------------------- footer section ---------------------------- */
// get save footer section information
const getSaveFooterInfo = () => {
  const project = getProjectInfo();
  const footer = project.footer;
  return footer;
};

// save footer
const saveFooter = (footer) => {
  const saveProject = getProjectInfo();
  const projectName = getCurrentProject();

  // set project services
  saveProject.footer = footer;
  localStorage.setItem(projectName, JSON.stringify(saveProject));
};

export {
  getSaveHeaderInfo,
  saveHeader,
  getHeader,
  getSaveHeroInfo,
  saveHero,
  getProjectInfo,
  getCurrentProject,
  getTitle,
  getSaveServicesInfo,
  saveServices,
  loadServiceData,
  getSaveBannerInfo,
  saveBanner,
  getSaveFooterInfo,
  saveFooter,
};
