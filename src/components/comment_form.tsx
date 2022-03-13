import React, { useRef } from "react";

import { StyledForm, StyledCommentInput, StyledInputBtn } from "./style";

interface IProps {
    comments: string[];
    setComments: (item: string[]) => void;
}

const CommentForm: React.FC<IProps> = (props: IProps) => {
    const { comments, setComments } = props;
    const reference = useRef<any>();

    const handleChange = (event) => {
        const value = reference.current.value;

        setComments([...comments, value]);

        event.preventDefault();
    };

    return (
        <StyledForm onSubmit={handleChange}>
            <StyledCommentInput ref={reference} type="text" placeholder="your comment.." />
            <StyledInputBtn type="submit" value="add comment" />
        </StyledForm>
    )
};

export default CommentForm
