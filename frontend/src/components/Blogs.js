import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const sendRequest = async () => {
        const res = await axios.gget("http://localhost:3001/api/blog").catch(err=>console.log(err));
        const data = await res.data;
        return data;
    }
    useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs));
    }, []);
    console.log(blogs);
    return (
        <div>Blogs</div>
    )
}

export default Blogs;