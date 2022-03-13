import React from "react";

import { List } from './style'

interface IComments {
    comments: string[];
}

const Comments: React.FC<IComments> = ({ comments }: IComments) => (
    <ul>
        {
            comments.map((item, id) => (
                <List key={id}>
                    {item}
                </List>
            ))
        }
    </ul>
);

export default Comments
