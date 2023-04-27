import React, { createContext, useEffect, useState } from "react";
import DSBanner from "./DSBanner";
import { getSaveBannerInfo, saveBanner } from "../utilities";

export const DBSContext = createContext(null);

const DBanner = () => {
  const makeBanner = getSaveBannerInfo();
  const [banner, setBanner] = useState(makeBanner);

  const changeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const btnNames = banner.btnName;

    // change button name
    if (name === "btnName1") {
      btnNames[0] = value;
      setBanner((preState) => ({ ...preState, btnName: btnNames }));
      return;
    } else if (name === "btnName2") {
      btnNames[1] = value;
      setBanner((preState) => ({ ...preState, btnName: btnNames }));
      return;
    }

    // change other
    setBanner((preState) => ({ ...preState, [name]: [value] }));
  };

  // save banner
  useEffect(() => {
    saveBanner(banner);
  }, [banner]);

  const DBSInfo = {
    banner,
    changeForm,
  };

  return (
    <>
      <section className="grid md:grid-cols-2 items-center gap-2 mb-10">
        <div>
          <h2 className="text-5xl font-bold leading-[60px]">{banner?.title}</h2>
          <p className="text-lg text-gray-600 mt-4">{banner?.description}</p>
          <div className="mt-8 space-x-4">
            <button className="btn btn-info">{banner?.btnName[0]}</button>
            <button className="btn btn-outline btn-info">
              {banner?.btnName[1]}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={banner?.image}
            alt="Banner image"
            className="w-full max-w-[430px] max-h-[430px]"
          />
        </div>
      </section>
      <DBSContext.Provider value={DBSInfo}>
        <DSBanner />
      </DBSContext.Provider>
    </>
  );
};

export default DBanner;
