import React from "react";
import "./css/Style.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Header = () => {
  const handelDashboard = () => {
    document.querySelector(`#dashboard`).style.display = "block";
  };
  return (
    <div className="header">
      <div className="navbar">
        <div className="icon1" onClick={handelDashboard}>
          <ion-icon name="reorder-three-outline"></ion-icon>
        </div>
        <div className="hshape">
          <div className="">13.4622</div>
          <div className="hnt2">0xF1....sc2</div>
          <div>Ethereum</div>
          <span className="icon1">
            <ion-icon name="cog-outline"></ion-icon>
          </span>
        </div>
      </div>
      <hr />
      <div>
        <div className="headerflex">
          <div className="ht">
            <div className="hp">Farms</div>
            <div>
              <hr className="hr2" />
            </div>
            <div className="htext">
              Stake one token and earn multiple token as rewards with high APY
              and low risk
            </div>
          </div>
          <div className="toggle">
            <FormControlLabel control={<Switch defaultChecked />} label="V2" />
          </div>
        </div>
      </div>
      <div className="hh">
        <div className="hh1">ALL FARMS</div>
        <div className="hh2">HOT FARMS</div>
      </div>
      <hr className="hr3" />
    </div>
  );
};

export default Header;
