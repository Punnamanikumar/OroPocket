import React, { createContext, useState } from "react";
import icon1 from "../images/one/logo.png";
import one1 from "../images/one/1.png";
import one2 from "../images/one/2.png";
import one3 from "../images/one/3.png";

import icon2 from "../images/two/icon2.png";
import two1 from "../images/two/1.png";
import two2 from "../images/two/2.png";
import two3 from "../images/two/3.png";

import icon3 from "../images/three/icon3.png";
import three1 from "../images/three/1.png";
import three2 from "../images/three/2.png";
import three3 from "../images/three/3.png";

import icon4 from "../images/four/icon4.png";
import four1 from "../images/four/1.png";
import four2 from "../images/four/2.png";
import four3 from "../images/four/3.png";

import icon5 from "../images/five/icon5.png";
import five1 from "../images/five/1.png";
import five2 from "../images/five/2.png";
import five3 from "../images/five/3.png";

import icon6 from "../images/six/icon6.png";
import six1 from "../images/six/1.png";
import six2 from "../images/six/2.png";
import six3 from "../images/six/3.png";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [category] = useState([
    {
      id: 1,
      name: "USDT",
      headname: "Cohort 29 ",
      percentage: "93.6",
      apy: "94.08%",
      boost: "Boosted",
      re1: `${one1}`,
      re2: `${one2}`,
      re3: `${one3}`,
      logo: `${icon1}`,
      total: 0,
    },
    {
      id: 2,
      name: "FTX",
      headname: "Cohort 29 ",
      percentage: "78.57",
      apy: "93.36%",
      boost: "Get Upto 200%",
      re1: `${two1}`,
      re2: `${two2}`,
      re3: `${two3}`,
      logo: `${icon2}`,
      total: 5,
    },
    {
      id: 3,
      name: "LINK",
      headname: "Cohort 29 ",
      percentage: "24.90",
      apy: "22.97%",
      boost: "Boosted",
      re1: `${three1}`,
      re2: `${three2}`,
      re3: `${three3}`,
      logo: `${icon3}`,
      total: 7,
    },
    {
      id: 4,
      name: "DAI",
      headname: "Cohort 29 ",
      percentage: "49.13",
      apy: "39.28%",
      boost: "Calculate APY",
      re1: `${four1}`,
      re2: `${four2}`,
      re3: `${four3}`,
      logo: `${icon4}`,
      total: 0,
    },
    {
      id: 5,
      name: "UNI",
      headname: "UFRM_CTR.",
      percentage: "10.86",
      apy: "96.41%",
      boost: "Boosted",
      re1: `${five1}`,
      re2: `${five2}`,
      re3: `${five3}`,
      logo: `${icon5}`,
      total: 0,
    },
    {
      id: 6,
      name: "DOT",
      headname: "Cohort 31",
      percentage: "10.86",
      apy: "96.41%",
      boost: "Calculate APY",
      re1: `${six1}`,
      re2: `${six2}`,
      re3: `${six3}`,
      logo: `${icon6}`,
      total: 0,
    },
  ]);
  return (
    <CategoryContext.Provider value={[category]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
