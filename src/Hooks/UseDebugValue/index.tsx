import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UseDebugValue = () => {
  const useDelayedMessage = (msg: string, delay: number) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
      setTimeout(() => {
        setMessage(msg);
      }, delay);
    });
    React.useDebugValue(message ? "Message Set" : "Message not set");
    return message;
  };

    return (
      <>
        <h1>useDebugValueのテスト</h1>
        <Link to="/">Home</Link>
        {useDelayedMessage("useDebugValueのテスト", 1500)}
        <p>DevToolには、「DelayedMessage: useDebugValueのテスト」と表示される</p>
      </>
    )
}

export default UseDebugValue;
