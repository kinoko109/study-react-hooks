import React, {useReducer} from "react";
import {Link} from "react-router-dom";
import {initialState, reducer} from "./reducer";

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducerのテスト</h1>
      <Link to="/">Home</Link>
      <br/>
      <button onClick={() => dispatch({type: "increment"})}>＋</button>
      <button onClick={() => dispatch({type: "decrement"})}>ー</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
      <p>count: {state.count}</p>
    </>
  )
}

export default UseReducer;
