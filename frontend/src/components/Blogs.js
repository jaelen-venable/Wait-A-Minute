import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@mui/material";


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
        <div>
           <Card/>
        </div>
    )
}

export default Blogs;