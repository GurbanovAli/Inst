import React, { useState } from "react";

import styled from 'styled-components'

const Auth = (props) => {
    const initialFormState = {
        'login': '',
        'password': '',
    };

    const [values, setValues] = useState(initialFormState);

    const handleChange = (event: any): any => {
        const { name, value } = event.target as any;

        setValues({ ...values, [name]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Login:
          <input type="text" name='login' onChange={handleChange} />
            </label>
            <label htmlFor="">Password:
          <input type="text" name='password' onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Auth
