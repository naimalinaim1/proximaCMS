import React, { createContext, useEffect, useState } from "react";
import DSFooter from "./DSFooter";
import { getSaveFooterInfo, saveFooter } from "../utilities";

export const DSFContext = createContext(null);

const DFooter = () => {
  const makeFooter = getSaveFooterInfo();
  const [footer, setFooter] = useState(makeFooter);

  // change company name
  const changeCompanyName = (e) => {
    const companyName = e.target.value;
    setFooter((preState) => ({ ...preState, companyName }));
  };

  // change company since date
  const changeCompanySinceData = (e) => {
    const sinceDate = e.target.value;
    setFooter((preState) => ({ ...preState, sinceDate }));
  };

  // change all title
  const changeTitle = (e, index) => {
    const linkTitle = e.target.value;
    const footerLinks = [...footer.footerLinks];
    footerLinks[index] = { ...footerLinks[index], linkTitle };
    setFooter((preState) => ({ ...preState, footerLinks }));
  };

  // change service title
  const changeServiceTitle = (e) => {
    changeTitle(e, 0);
  };

  // change company
  const changeCompanyTitle = (e) => {
    changeTitle(e, 1);
  };

  // change legal
  const changeLegalTitle = (e) => {
    changeTitle(e, 2);
  };

  // change footer link name
  const changeFooterLink = (arrIdx, idx, name, action) => {
    const footerLinks = [...footer.footerLinks];
    const getArray = footerLinks[arrIdx];
    const changeLink = getArray[name];
    changeLink[idx] = action;
    setFooter((preState) => ({ ...preState, footerLinks }));
  };

  // delete footer link
  const deleteFooterLink = (arrIdx, idx) => {
    const footerLinks = [...footer.footerLinks];
    const getArray = footerLinks[arrIdx];

    getArray.linkActions.splice(idx, 1);
    getArray.linkNames.splice(idx, 1);

    setFooter((preState) => ({ ...preState, footerLinks }));
  };

  // save footer
  useEffect(() => {
    saveFooter(footer);
  }, [footer]);

  const DSFInfo = {
    footer,
    changeCompanyName,
    changeCompanySinceData,
    changeServiceTitle,
    changeCompanyTitle,
    changeLegalTitle,
    changeFooterLink,
    deleteFooterLink,
  };
  return (
    <>
      <div className="bg-info">
        <footer className="footer py-14 w-[98%] mx-auto text-base-content">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p className="mt-2">
              {footer?.companyName}
              <br />
              {footer?.sinceDate}
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold text-white/90 mb-2">
              {footer?.footerLinks[0]?.linkTitle}
            </span>
            {footer?.footerLinks[0]?.linkNames?.map((linkName, index) => (
              <a key={index} className="link link-hover">
                {linkName}
              </a>
            ))}
          </div>
          <div>
            <span className="text-2xl font-bold text-white/90 mb-2">
              {footer?.footerLinks[1]?.linkTitle}
            </span>
            {footer?.footerLinks[1]?.linkNames?.map((linkName, index) => (
              <a key={index} className="link link-hover">
                {linkName}
              </a>
            ))}
          </div>
          <div>
            <span className="text-2xl font-bold text-white/90 mb-2">
              {footer?.footerLinks[2]?.linkTitle}
            </span>
            {footer?.footerLinks[2]?.linkNames?.map((linkName, index) => (
              <a key={index} className="link link-hover">
                {linkName}
              </a>
            ))}
          </div>
        </footer>
      </div>
      <DSFContext.Provider value={DSFInfo}>
        <DSFooter />
      </DSFContext.Provider>
    </>
  );
};

export default DFooter;
