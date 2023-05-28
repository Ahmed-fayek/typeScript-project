import { useEffect, useState } from "react";
import Post from "./post";
import './posts.css';
import {Link} from 'react-router-dom';
interface post {
    id: number,
    userId: number,
    title: string,
    body:string
}

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {setPosts(json)})
    }, [])
    return (<>
        <Link to={'/users'}> Users</Link>
        {posts.map((post: post) => {

             return (<div key={post.id} className="posts">
                <Post post={post}  />
            </div>)

        })}
    </>)
}
export default Posts;