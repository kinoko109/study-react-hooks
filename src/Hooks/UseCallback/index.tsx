import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";

const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleSetCount1 = useCallback(() => setCount1(count1 + 1), [] )
  const handleSetCount2 = useCallback(() => setCount2(count2 + 1), [count2] )

  return (
    <>
      <h1 className={""}>useCallbackのテスト</h1>
      <Link to="/">Home</Link>
      <br/>
      <button onClick={handleSetCount1}>button1</button>
      <button onClick={handleSetCount2}>button2</button>
      <p>button1:{count1}</p>
      <p>button2:{count2}</p>
    </>
  )
}

export default UseCallback;
