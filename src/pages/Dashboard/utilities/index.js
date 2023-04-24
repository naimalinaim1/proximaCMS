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
    headerLink: [
      "<a href='/'>Home</a>",
      "<a href='about'>About</a>",
      "<a href='service'>Service</a>",
    ],
    linkAction: ["/", "about", "service"],
    linkName: ["Home", "About", "Service"],
  };

  const defaultHero = {
    title: "My Hero Section on a Website?",
    descriptions: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore recusandae modi, architecto quibusdam nesciunt vitae quia quo quod omnis cum veritatis placeat autem minima repellat, vel maxime! Voluptates nihil at natus labore esse, mollitia ipsam magni consequatur commodi doloribus est impedit soluta vel consequuntur sequi, architecto, rem obcaecati iusto in. Cumque harum quod labore provident reiciendis ipsum nostrum quis autem ipsam officiis possimus quisquam id, fugit blanditiis rerum ex?",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore recusandae modi, architecto quibusdam nesciunt vitae quia quo quod omnis cum veritatis placeat autem minima repellat, vel maxime! Voluptates nihil at natus labore esse, mollitia ipsam magni consequatur commodi doloribus est impedit soluta vel consequuntur sequi, architecto, rem obcaecati iusto in. Cumque harum quod labore provident reiciendis ipsum nostrum quis autem ipsam officiis possimus quisquam id, fugit blanditiis rerum ex?",
    ],
    btnName: "Get Started",
  };

  const defaultProject = {
    title: "Blank Title",
    header: defaultHeader,
    hero: defaultHero,
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
  getProjectInfo,
  getCurrentProject,
  getTitle,
};
