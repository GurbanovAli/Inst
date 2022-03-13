import React, { useState } from "react";

import Comments from './comments'
import CommentForm from "./comment_form";
import { StyledDiv, StyledImage } from "./style";

interface IProps {
    comment: string;
    img: string;
}

const Post: React.FC<IProps | any> = ({ props }: IProps | any) => {
    const [comments, setComments] = useState<string[]>([props.comment]);

    return (
        <StyledDiv>
            <div>
                <StyledImage src={props.img} />
            </div>
            <>
                <CommentForm comments={comments} setComments={setComments} />
                <Comments comments={comments} />
            </>
        </StyledDiv>
    )
}

export default Post
