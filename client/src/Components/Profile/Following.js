// import React, { useEffect, useState } from "react";
// import { Circle, Inbox } from "react-bootstrap-icons";
// import { useNavigate } from "react-router-dom";
// import "./Following.css";
// import axios from "axios";
// import imageavatar from "./imageavater.webp";

// export const Following = () => {
//   const navigate = useNavigate();

//   const [getfollowing, setgetfollowing] = useState([]);

//   const userid = localStorage.getItem("userid");

//   function getfollowingUsers() {
//     axios
//       ?.get(`http://localhost:5000/api/user/following/${userid}`)
//       .then((response) => {
//         setgetfollowing([response?.data.following]);
//         console.log(response.data.following, "setgetfollowing");
//       });
//   }

//   useEffect(() => {
//     getfollowingUsers();
//   }, []);
//   return (
//     <div className="containers">
//       <div className="below-cards">
//         <div className="cards">
//           {getfollowing.map((val) => (
//                 <div className="card m-3 align-center">
//                   <div className="row g-0 d-flex w-100">
//                     <div className="col-md-4" style={{ width: "220px" }}>
//                       <img
//                         src={imageavatar}
//                         className="img-fluid rounded-start"
//                         alt=" broken"
//                       />
//                     </div>
//                     <div className="col-md-4 col-lg-7">
//                       <div className="m-5">
//                         {" "}
//                         {
//                           val.map((user)=>(<><h5 className="card-title"><b>{user.name}</b></h5> </>))
//                         }
//                       </div>
//                       <div className="w-100">
//                         {
//                           val.map((user)=>(<><p className='card-text'><b>{user.email}</b></p></>))
//                         }
//                       </div>
//                     </div>
//                   </div>
//                 </div>
              
//               ))
//          }
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Circle } from "react-bootstrap-icons";
import imageavatar from "./imageavater.webp";
import "./Following.css";

export const Following = () => {
  const navigate = useNavigate();
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    axios.get(`http://localhost:5000/api/user/following/${userid}`)
      .then((response) => {
        setFollowing(response.data.following);
      })
      .catch((error) => {
        console.error("Error fetching following users:", error);
      });
  }, []);

  return (
    <div className="containers">
      <div className="below-cards">
        <div className="cards">
          {following.map((user) => (
            <div key={user._id} className="card m-3 align-center">
              <div className="row g-0 d-flex w-100">
                <div className="col-md-4" style={{ width: "220px" }}>
                  <img
                    src={imageavatar}
                    className="img-fluid rounded-start"
                    alt="avatar"
                  />
                </div>
                <div className="col-md-4 col-lg-7">
                  <div className="m-5">
                    <h5 className="card-title"><b>{user.name}</b></h5>
                  </div>
                  <div className="w-100">
                    <p className='card-text'><b>{user.email}</b></p>
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

