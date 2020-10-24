import React, {createContext, useState} from "react";
import {Link} from "react-router-dom";
import FirstChild from "./FirstChild";

export const StateContext = createContext("");

const UseContext = () => {
  const [text, setText] = useState("")

  return (
    <StateContext.Provider value={text}>
      <h1>useContextのテスト</h1>
      <Link to="/">Home</Link>
      <br/>
      <p>入力したテキストがpropsで渡されます</p>
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <FirstChild />
    </StateContext.Provider>
  )
}

export default UseContext;
