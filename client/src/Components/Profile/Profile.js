import React, { useState } from "react";
import "./profile.css";
import { Circle, Inbox } from "react-bootstrap-icons";
import { Outlet, useNavigate } from "react-router-dom";


export const Profile = () => {
  const navigate = useNavigate();

  


  return (
    <div className="containers">
      <div className="above">
        <div className="icon">
          <i className="fa fa-circle-o" aria-hidden="true"></i>
        </div>
        <div className="bio">
          <div className="bioname">
            <Circle className="circle-abv" />
            <h5>Arjun Reddy</h5>
          </div>
          <div className="profiledata">
            <p className="post">Posts : 511</p>
            <p className="followers">Followers :511</p>
            <p className="following">Following :511</p>
          </div>
        </div>
      </div>
      <div className="underline">
        <hr></hr>
      </div>
      <div>
        <div className="data">
          <div className="pos">
            <Inbox className="inb" />
            <p onClick={() => navigate("")}> posts</p>
          </div>
          <div className="pos">
            <Inbox className="inbox" />
            <p onClick={() => navigate("Followers")}>Followers</p>
          </div>
          <div className="pos">
            <Inbox className="inbox" />
            <p onClick={() => navigate("Following")}>Following</p>
          </div>
        </div>
      </div>
      <div>
     <Outlet/>
       
      </div>
    
    </div>
  );
};
