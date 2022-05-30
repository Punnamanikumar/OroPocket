import React, { useContext, useState } from "react";
import { CategoryContext } from "./context/ContextApi";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";


const Body = () => {
  const [dataa] = useContext(CategoryContext);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="vdata" id="bodyy">
      <div className="viconflex">
        <div className="textfie">
          <TextField id="standard-basic" label="Search" variant="standard" />
          <TextField id="standard-select-currency" select label="Sort" helperText="Please select to sort" variant="standard"></TextField>
        </div>
        <div className="viconflex2">
          <div className="icon1" onClick={() => setToggle(true)}><ion-icon name="list-outline"></ion-icon></div>
          <div className="icon1" onClick={() => setToggle(false)}><ion-icon name="grid-outline"></ion-icon></div>
        </div>
      </div>
      <div>
        {toggle ? (
          <div>
            {dataa.map((val) => (
              <div>
                <div className="box">
                  <div className="vimg"><img src={val.logo} alt="" /></div>
                  <div className="vflex"><div className="vf1">{val.headname}</div><br /><div className="hnameh">{val.name}</div></div>
                  <div className="vflex perfl">
                    <div>Pool Filled</div><br />
                    <div><CircularProgress color="secondary" variant="determinate" value={val.percentage}/></div>
                    <div className="percentagr">{val.percentage}</div>
                  </div>
                  <div className="vflex">
                    <div>Rewards</div><br />
                    <div>
                      <AvatarGroup total={val.total}>
                        <Avatar alt="" src={val.re1} />
                        <Avatar alt="" src={val.re2} />
                        <Avatar alt="" src={val.re3} />
                      </AvatarGroup>
                    </div>
                  </div>
                  <div><div>APY</div><br /><div>{val.apy}</div>
                  </div>
                  <div>{val.boosted}</div>
                  <div className="icon1"><ion-icon name="chevron-forward-outline"></ion-icon></div>
                </div><hr className="bhr" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mainbox">
            {dataa.map((val) => (
              <div className="box2">
                <div>
                  <div className="gridf1">
                    <div className="gimg"><img src={val.logo} alt="" /></div>
                    <div className="gtext"><div>{val.headname}</div><div className="hnameh">{val.name}</div></div>
                  </div>
                  <div className="gridf2 progd">
                    <div>Pool Filled</div>
                    <div>
                    <div><CircularProgress color="secondary" variant="determinate" value={val.percentage} className="prog"/></div>
                    <div className="percentage">{val.percentage}</div>
                    </div>
                  </div>
                </div>
                <div className="gridf2">
                  <div>Rewards</div>
                  <div className="avatars">
                    <AvatarGroup total={val.total}>
                      <Avatar alt="" src={val.re1} />
                      <Avatar alt="" src={val.re2} />
                      <Avatar alt="" src={val.re3} />
                    </AvatarGroup>
                  </div>
                </div>
                <div className="gridf2"><div>APY</div><div className="apy">{val.apy}</div>
                </div>
                <div className="gridf3">
                  <div><Button variant="outlined"><ion-icon name="rocket-outline"></ion-icon>{val.boost}</Button></div>
                  <div className="stake"><Button variant="contained" color="success">Stake</Button></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;



