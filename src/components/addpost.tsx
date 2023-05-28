import {  useEffect, useState } from "react";
import './comments.css'
import { Link } from 'react-router-dom';
import { post } from "./posts";
import axios from "axios";

const AddPost = () => {
    const [title, settitle] = useState<string>('');
    const [body, setbody] = useState<string>('');
    const [post, setpost] = useState<post>();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(json => { setpost(json) })
    }, []);
    const addPost = () => {
        axios({
        method: 'POST',
        url: `https://jsonplaceholder.typicode.com/posts`,
        data: {
        userId: post?.userId,
        title: title,
        body:body
        }
        });
    }
    return (<>
        <br></br><br></br>
        <input type="text" placeholder="post title" onChange={(e) => { settitle(e.target.value) }} />
        <br></br><br></br>
        <input type="text" placeholder='post body' onChange={(e) => { setbody(e.target.value) }} />
        <br></br><br></br>
        <button onClick={() => { addPost()}}>Add</button>
        <br></br><br></br>
        <Link to={'/'}> Go home</Link>
    </>)
}
export default AddPost;