import React, {useState} from "react";

import Auth from './auth'
import data from '../data.json'

export const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <h1>
      <Auth data={data}/>
    </h1>
  )
};