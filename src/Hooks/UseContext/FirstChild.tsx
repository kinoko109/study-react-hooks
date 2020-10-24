import React from "react";
import SecondChild from "./SecondChild";

const FirstChild = () => {

  return (
    <>
      <p>FirstChildのコンポーネントは、SecondChildコンポーネントをimportするだけ（確認用にネストさせる）</p>
      <SecondChild/>
    </>
  )
}

export default FirstChild;
