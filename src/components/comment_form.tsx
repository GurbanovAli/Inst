import React from "react";

import { StyledForm, StyledCommentInput, StyledInputBtn } from "./style";

const CommentForm = (props) => {
    const {comments, setComments} = props;
    console.log(comments);

    const handleChange = (event: any): any => {
        const { value } = event.target as any;

        setComments([ ...comments, value ])
      };

      const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledCommentInput type="text" placeholder="your comment.." onChange={handleChange}/>
            <StyledInputBtn type="submit" value="add comment" />
        </StyledForm>
    )
};

export default CommentForm
