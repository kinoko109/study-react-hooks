import React, {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [])

  useLayoutEffect(() => {
    console.log(count);
  }, [count])

    return (
      <>
        <h1>useLayoutEffectのテスト</h1>
        <Link to="/">Home</Link>
        <br/>
        <button onClick={() => setCount(count + 1)}>button</button>
        <p>deps空のcount: {count} consoleには初回のみ表示</p>
        <p>depsにcountを指定したcount: {count} consoleにはcountが変動と同時に表示</p>
      </>
    )
}

export default UseLayoutEffect;
