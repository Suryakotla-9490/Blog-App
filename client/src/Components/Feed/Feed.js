import React, { useEffect, useState } from "react";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imageavatar from "./imageavater.webp";

const Feed = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const userId = localStorage.getItem("userid");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blog/allBlogs/`
        );
        setBlogs(response?.data || []);
        console.log(response?.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, [userId]);
  return (
    <div className="containers align-center">
        <button className="btn btn-danger" onClick={()=>navigate('/addtweet')}>Add Tweet</button>
      <div className="below-cards">
        <div className="cards">
          {blogs.map((blog) => (
            <div key={blog._id} className="card m-3 align-center">
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
                    {/* <h5 className="card-title"><b>{blog}</b></h5> */}
                  </div>
                  <div className="w-100">
                    <p className="card-text">
                      <b>Title: {blog.title}</b>
                    </p>
                    <p className="card-text">
                      <b>Description: {blog.description}</b>
                    </p>
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

export default Feed;
