import React from "react";

const CommentForm = (props) => {
    const {comments, setComments} = props;

    const handleChange = (event: any): any => {
        const { value } = event.target as any;
    
        setComments([ ...comments, value ])
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(comments);
      };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
};

export default CommentForm