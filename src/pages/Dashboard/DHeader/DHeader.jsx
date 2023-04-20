import React, { createContext, useEffect, useRef, useState } from "react";
import DSHeader from "../DashboardSetting/DSHeader";

export const DSHContext = createContext(null);

const DHeader = () => {
  const headerRef = useRef();
  const [companyName, setCompanyName] = useState("Company Name");
  const [links, setLinks] = useState(
    '<a href="/">Home</a><a href="/about">About</a><a href="/service">Service</a>'
  );
  const [fakeLink, setFakeLink] = useState(["Home", "About", "Service"]);

  // change company logo
  const changeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const [linkName, setLinkName] = useState("");
  const [linkAdd, setLinkAdd] = useState("");

  //   create link
  const createLinkName = (e) => {
    const link = e.target.value;
    setLinkName(link);
  };

  //   set link address
  const setLinkAddress = (e) => {
    const linkAddress = e.target.value;
    setLinkAdd(linkAddress);
  };

  //   added new link
  const addNewLink = () => {
    const createLink = links + `<a href="${linkAdd || "/"}">${linkName}</a>`;
    if (linkName) {
      setLinks(createLink);
      setFakeLink([...fakeLink, linkName]);
    }
  };

  //   save code local storage
  const saveLocalStorage = () => {
    const getHeader = headerRef.current.innerHTML;
    localStorage.setItem("header", getHeader);
  };

  const DSHInfo = {
    changeCompanyName,
    createLinkName,
    setLinkAddress,
    addNewLink,
    saveLocalStorage,
  };

  return (
    <div>
      <div ref={headerRef}>
        <header className="w-[96%] max-w-[1280px] mx-auto flex justify-between items-center py-6">
          <div className="font-bold text-xl">{companyName}</div>
          <nav className="flex space-x-4">
            {fakeLink.map((lk, idx) => (
              <a key={idx}>{lk}</a>
            ))}
          </nav>
        </header>
      </div>
      <div className="mt-12">
        <DSHContext.Provider value={DSHInfo}>
          <DSHeader />
        </DSHContext.Provider>
      </div>
    </div>
  );
};

export default DHeader;
