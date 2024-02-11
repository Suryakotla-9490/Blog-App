import React, { useState } from "react";
import axios from "axios";

const Addtweet = () => {
    const [userid ,setuserid] = useState(localStorage.getItem('userid'))


    

      const [tweetData, setTweetData] = useState({ title: "", description: "", author: `${userid}` });
      const [error, setError] = useState("");
    
      const handleChange = (e) => {
        setTweetData({ ...tweetData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/api/blog/add", tweetData);
          console.log("Tweet added successfully:", response.data);
          // Redirect or perform other actions upon successful tweet submission
        } catch (error) {
          setError(error.response.data.message);
        }
      };
    
      return (
        <div className="container">
          <h2>Add Tweet</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" value={tweetData.title} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" name="description" rows="3" value={tweetData.description} onChange={handleChange} required></textarea>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input type="text" className="form-control" id="author" name="author" value={tweetData.author} onChange={handleChange} required />
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
            {error && <p className="text-danger">{error}</p>}
          </form>
        </div>
      );
    
    
}

export default Addtweet