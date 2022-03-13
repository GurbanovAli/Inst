import React, { useState } from "react";

import Auth from './auth'
import Main from './components'
import data from '../data.json'

export const App = () => {
    const [auth, setAuth] = useState(false);

    return (
        <h1>
            <Main data={data[1]} />
        </h1>
    )
};
