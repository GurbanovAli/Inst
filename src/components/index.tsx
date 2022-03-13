import React from "react";

import Post from './post'

const Main = (props:any) => {
    const post = props.data.post;

    return (
        <div>
            {
                post.map((item, id) =>(
                    <Post key={id} props={item}/>
                ))
            }
        </div>
    )
}

export default Main
