import React, { useEffect, useState } from "react";
import { Circle, Inbox } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Followers.css";
import axios from "axios";
import imageavatar from "./imageavater.webp";

export const Followers = () => {
  const navigate = useNavigate();
  let [selectedItem, setSelectedItem] = useState("");
  const listItemStyle = (item) => {
    return {
      color: selectedItem === item ? "red" : "black",
      cursor: "pointer",
    };
  };
  const navigation = (item) => {
    setSelectedItem(item);
    navigate(`${item}`);
  };
  const [getfollowers, setgetfollowers] = useState([]);
  const userid = localStorage.getItem("userid");

  function getUserFollowers() {
    axios
      ?.get(`http://localhost:5000/api/user/followers/${userid}`)
      .then((response) => {
        setgetfollowers([response?.data.followers]);
        console.log(response.data.followers, "setgetfollowers");
      });
  }

  useEffect(() => {
    getUserFollowers();
  }, []);
  return (
    <div className="containers">
      <div className="below-cards">
        <div className="cards">
          {getfollowers
            ? null
            : getfollowers.map((val) => (
                <div className="card m-3 align-center">
                  <div className="row g-0 d-flex w-100">
                    <div className="col-md-4 col-lg-4" style={{ width: "220px" }}>
                      <img
                        src={imageavatar}
                        className="img-fluid rounded-start"
                        alt=" broken"
                      />
                    </div>
                    <div className="col-md-4 col-lg-7">
                      <div className="m-5">
                        {" "}
                        {val.map((user) => (
                          <>
                            <h5 className="card-title">
                              <b>{user.name}</b>
                            </h5>{" "}
                          </>
                        ))}
                      </div>
                      <div className="w-100">
                        {val.map((user) => (
                          <>
                            <p className="card-text">
                              <b>{user.email}</b>
                            </p>
                          </>
                        ))}
                      </div>
                      <div>
                        <button className="btn"> Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
