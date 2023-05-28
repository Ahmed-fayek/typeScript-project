import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './comments.css'
import {Link} from 'react-router-dom';
type comment= {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}[]
const Comments = () => {
    const { postId } = useParams<string>();
    const [comments,setcomments]=useState<comment>([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => res.json())
        .then(json=>setcomments(json))
    }, [])

    return (<>
        {comments.map((comment) => {
            if (comment.postId === +(postId?postId:0)) {
                return (
                    <div className="comment" key={comment.id}>
                        <h1><span> Commented by</span> {comment.email}</h1>
                        <h1><span>Comment :</span> {comment.body}</h1>
                        <h1><span>Commen Name</span>{comment.name}</h1>
                        </div>
                )
            }
        })}
        <Link to={'/'}> Go home</Link>

    </>)
}
export default Comments;