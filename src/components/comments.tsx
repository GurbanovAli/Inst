import React from "react";

import { List } from './style'

const Comments = ({ comments }: any) => (
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
