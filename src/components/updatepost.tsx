import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './comments.css'
import { Link } from 'react-router-dom';
import { post } from "./posts";
import axios from "axios";

const UpdatePost = () => {
    const { postId } = useParams();
    const [title, settitle] = useState<string>('');
    const [body, setbody] = useState<string>('');
    const [post, setpost] = useState<post>();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(json => { setpost(json) })
    }, []);
    const updatePost = () => {
        axios({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
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
        <button onClick={() => { updatePost()}}>update</button>
        <br></br><br></br>
        <Link to={'/'}> Go home</Link>
    </>)
}
export default UpdatePost;