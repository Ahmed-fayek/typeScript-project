import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
    interface user  {
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string
            }
        }
}

const Post = (props: any) => {

    const { post } = props;
    let [users,setUser]=useState<user>() ;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json =>
                json.map((user: user) => {
                    if (user.id === post.userId) {
                        setUser(user)
                    }
                }))
    }, []);
    return (<div className="post">
        <p>outher: {users?.name} his/her id is {users?.id }</p>
        <h2>post title : {post.title}</h2>
        <p>post body : {post.body}</p>
        <Link to={`/posts/`+post.id}>show comments</Link>
    </div>)
}
export default Post;