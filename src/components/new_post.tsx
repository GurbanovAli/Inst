import React, { useState } from "react";

import { StyledAddBtn, StyledInput, StyledImage } from "./style";

const NewPost = (props: any) => {
    const { post, setPost } = props;
    const [selectedImg, setSelectedImg] = useState(null);

    const setNewPost = () => {
        const getImg = selectedImg && URL.createObjectURL(selectedImg);
        const value = {
            "img": getImg,
            "comment": ""
        }

        setPost([value, ...post]);
    };

    const clearState = () => {
        setNewPost();
        setSelectedImg(null);
    }

    return (
        <div>
            {selectedImg && (
                <div>
                    <StyledImage  alt="" width="250px" src={URL.createObjectURL(selectedImg)} />
                    <br/>
                    <StyledAddBtn onClick={selectedImg && clearState}>Add</StyledAddBtn >
                </div>
            )}
            <StyledInput
                type="file"
                name="newImage"
                onChange={(e: any) => {
                    setSelectedImg(e.target.files[0]);
                }}
            />
        </div>
    );
};

export default NewPost
