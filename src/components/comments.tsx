import React from "react";

const Comments = ({comments} : any) =>(
    <ul>
        {
            comments.map((item, id)=>(
                <li key={id}>
                    {item}
                </li>
            ))
        }
    </ul>
);

export default Comments
