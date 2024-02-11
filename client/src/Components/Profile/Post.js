import React, { useEffect, useState } from 'react'
import './Post.css'
import { Circle, Inbox } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import imageavatar from './imageavater.webp'

export const Post = () => {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([]);
    const userId = localStorage.getItem('userid')

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await axios.get(`http://localhost:5000/api/blog/user/${userId}`);
                setBlogs(response?.data.user?.blogs || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }
        fetchBlogs();
    }, [userId]);

    return (
        <div className='containers'>
            <div className='below-cards'>
                <div className='cards'>
                    {blogs.map((blog) => (
                        <div key={blog._id} className="card m-3 align-center">
                            <div className="row g-0 d-flex w-100">
                                <div className="col-md-4" style={{ width: "220px" }}>
                                    <img src={imageavatar} className="img-fluid rounded-start" alt="avatar" />
                                </div>
                                <div className="col-md-4 col-lg-7">
                                    <div className='m-5'>
                                        {/* <h5 className="card-title"><b>{blog}</b></h5> */}
                                    </div>
                                    <div className='w-100'>
                                        <p className='card-text'><b>Title: {blog.title}</b></p>
                                        <p className='card-text'><b>Description: {blog.description}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
