import React, {useContext} from "react";
import {StateContext} from "./index";

const SecondChild = () => {
  const text = useContext(StateContext)

  return (
    <p>親で定義したtextのstateをuseContextで受け取りそのまま表示する：{text}</p>
  )
}

export default SecondChild;
