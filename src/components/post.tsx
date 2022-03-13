import React, { useState } from "react";

import Comments from './comments'
import CommentForm from "./comment_form";
import { StyledDiv, StyledImage } from "./style";

const Post = (props: any) => {
    const post = props.props;

    const [comments, setComments] = useState([post.comment]);

    return (
        <StyledDiv>
            <div>
                <StyledImage src={post.img} />
            </div>
            <>
                <CommentForm comments={comments} setComments={setComments} />
                <Comments comments={comments} />
            </>
        </StyledDiv>
    )
}

export default Post
