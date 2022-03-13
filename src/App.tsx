import React, { useState } from "react";

import Auth from './auth'
import Main from './components'
import data from '../data.json'
import styled from 'styled-components'

export const App = () => {
    const [auth, setAuth] = useState(false);

    return true?
    (
        <StyledContainer>
            <Main data={data} />
        </StyledContainer>
    ):
    (
        <>
            <Auth data={data} setAuth={setAuth}/>
        </>
    )
};

const StyledContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    font-family:sans-serif;
`
