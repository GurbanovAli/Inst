import React from "react";

const Post = (props:any) => {
    const post = props.props;

    return (
        <div>
            <div>
                <img width="400" height="300" src={post.img}/>
            </div>
            <p>{post.comment}</p>
        </div>
    )
}

export default Post
