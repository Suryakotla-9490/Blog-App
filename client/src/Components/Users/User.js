// import React, { useEffect, useState } from "react";
// import { Circle } from "react-bootstrap-icons";
// import "./Users.css";
// import axios from "axios";

// const User = () => {
//   const baseUrl = "http://localhost:5000/api/";
//   const [getAllUsers, setgetAllUsers] = useState([]);

//   const userid= localStorage.getItem('userid')

//   function getallusers() {
//     axios.get("http://localhost:5000/api/user/").then((response) => {
//       setgetAllUsers(response.data);
//       console.log(getAllUsers,"getAllUsers")
//     });
//   }

//   function followuser(id) {
    
//     const requestId=id
//     axios.post(`http://localhost:5000/api/user/follow/${userid}`,requestId).then((response) => {
//       console.log(response,"response.data")
//     });
//   }

//   useEffect(() => {
//     getallusers();
//   }, []);



//   return (
//     <div className="alluser-containter">
//       {
    
//       getAllUsers.map((user) => (
//         <>
//           <div className="user-card">
//             <div className="follow-card">
//               <div className="cir">
//                 <Circle className="circle" />
//               </div>
//               <div className="cont-following">
//                 <p class="card-user">
//                   <h5>{user.name}</h5>
//                   <h5>{user._id}</h5>
//                   <p>{`Following - ${user.following.length}`}</p>
//                   <p>{`Followers - ${user.followers.length}`}</p>
//                 </p>
//               </div>
//             </div>
//             <div className="follo">
//               <button className="bthn-fo" onClick={()=>followuser(user._id)} >Follow</button>
//             </div>
            
//           </div>
//         </>
//       ))
//       }
//     </div>
//   );
// };

// export default User;

import React, { useEffect, useState } from "react";
import { Circle } from "react-bootstrap-icons";
import "./Users.css";
import axios from "axios";

const User = () => {
  const baseUrl = "http://localhost:5000/api/";
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem('userid');

  useEffect(() => {
    getallusers();
  }, []);

  const getallusers = async () => {
    try {
      const response = await axios.get(`${baseUrl}user/`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const followUser = async (id) => {

    const reqid={ 
      requestId:id,
    }
    try {
      await axios.post(`${baseUrl}user/follow/${userId}`, reqid);
      // Refresh user list after following
      getallusers();
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  return (
    <div className="alluser-containter">
      {users.map((user) => (
        <div key={user._id} className="user-card">
          <div className="follow-card">
            <div className="cir">
              <Circle className="circle" />
            </div>
            <div className="cont-following">
              <p className="card-user">
                <h5>{user.name}</h5>
                <p>{`Following - ${user.following.length}`}</p>
                <p>{`Followers - ${user.followers.length}`}</p>
              </p>
            </div>
          </div>
          <div className="follo">
            <button className="bthn-fo" onClick={() => followUser(user._id)}>Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;

