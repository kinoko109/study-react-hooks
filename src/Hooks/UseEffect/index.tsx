import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count, "buttonをクリックしてもcountが正常にされない");
  }, [])

  useEffect(() => {
    console.log(count);
  }, [count])

  useEffect(() => {
    return console.log(count * 100);
  }, [count])

    return (
      <>
        <h1>useEffectのテスト</h1>
        <Link to="/">Home</Link>
        <br/>
        <button onClick={() => setCount(count + 1)}>button</button>
      </>
    )
}

export default UseEffect;
