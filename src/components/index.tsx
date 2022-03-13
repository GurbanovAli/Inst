import React, { useState } from "react";

import NewPost from "./new_post";
import Post from './post'
import styled from 'styled-components'

const Main = (props: any) => {
    const [post, setPost] = useState(props.data.post);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <StyledButton {...{ toggle }} onClick={() => setToggle(!toggle)}>
                {toggle ? 'cancel' : 'add post'}
            </StyledButton>
            {toggle && <NewPost post={post} setPost={setPost} />}
            {
                post.map((item, id) => (
                    <Post key={id} props={item} />
                ))
            }
        </div>
    )
}

const StyledButton = styled.button`
    margin: auto 0.5em;
    background-color: ${({ toggle }) => toggle ? 'red' : '#4CAF50'};
    color: white;
    padding: 7px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

export default Main
