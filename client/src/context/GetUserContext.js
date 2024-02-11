import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const GetUserContext = createContext();
const baseUrl = "http://localhost:5000/api/";

const GetUserProvider = () => {
  const [getAllUsers, setgetAllcontext] = useState();

  useEffect(async () => {
    const res = await axios.get(`${baseUrl}/user/`).then((response) => {
      console.log("response", response.data);
    });
  }, []);

  return (
    <GetUserContext.Provider value={data}>{children}</GetUserContext.Provider>
  );
};

export  {GetUserContext,GetUserProvider};
