import React, {useState} from "react";

import Comments from './comments'
import CommentForm from "./comment_form";

const Post = (props:any) => {
    const post = props.props;

    const [comments, setComments] = useState([post.comment]);

    return (
        <div>
            <div>
                <img width="400" height="300" src={post.img}/>
            </div>
            <CommentForm copmments={comments} setComments={setComments}/>
            <Comments comments={comments} />
        </div>
    )
}

export default Post
