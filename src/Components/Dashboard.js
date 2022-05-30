import React from "react";
import Logo from "./images/biglogo.png";
const Dashboard = () => {
  const handelClose = () => {
    document.querySelector("#dashboard").style.display = "none";
  };
  return (
    <div className="dashboard" id="dashboard">
      <div className="dasflex1">
        <div>
          <img src={Logo} alt="" />
          <div className="close" onClick={handelClose}><ion-icon name="close-circle-outline"></ion-icon></div>
        </div>
        <div><ion-icon name="home-outline"></ion-icon>Dashboard</div>
        <div className="dashlflx">
          <div><ion-icon name="diamond-outline"></ion-icon></div>
          <div>Earn</div>
          <div><ion-icon name="caret-down-outline"></ion-icon></div>
        </div>
        <div>
          <ul>
            <li>All Farms</li>
            <li>My Stakes</li>
          </ul>
        </div>
        <div className="dashlflx">
          <div><ion-icon name="analytics-outline"></ion-icon></div>
          <div>Trade</div>
          <div>
            <ion-icon name="caret-down-outline"></ion-icon>
          </div>
        </div>
        <div>
          <ul>
            <li>Exchange</li>
            <li>Liquidity</li>
          </ul>
        </div>
        <div><ion-icon name="layers-outline"></ion-icon>Bridge</div>
        <div><ion-icon name="golf-outline"></ion-icon>Governance</div>
        <div>Referral</div>
      </div>
      <div><ion-icon name="chatbubbles-outline"></ion-icon>Support</div>
    </div>
  );
};

export default Dashboard;
