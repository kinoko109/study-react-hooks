import React, {useMemo, useState} from "react";
import {Link} from "react-router-dom";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const data1 = useMemo(() => {
    return count * 100 / 2;
  }, [])

  const data2 = useMemo(() => {
    return count * 100 / 2;
  }, [count])

    return (
      <>
        <h1>useMemoのテスト</h1>
        <Link to="/">Home</Link>
        <br />
        <button onClick={() => setCount(count + 1)}>button</button>
        <p>{data1}</p>
        <p>{data2}</p>
      </>
    )
}

export default UseMemo;
