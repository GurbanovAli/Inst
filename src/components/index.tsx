import React, { useState } from "react";

import NewPost from "./new_post";
import Post from './post'

const Main = (props: any) => {
    const [post, setPost] = useState(props.data.post);

    return (
        <div>
            <NewPost post={post} setPost={setPost} />
            {
                post.map((item, id) => (
                    <Post key={id} props={item} />
                ))
            }
        </div>
    )
}

export default Main
