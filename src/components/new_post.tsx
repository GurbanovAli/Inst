import React, { useState } from "react";

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
                    <img alt="" width="250px" src={URL.createObjectURL(selectedImg)} />
                    <button onClick={selectedImg && clearState}>Add</button>
                </div>
            )}
            <input
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
