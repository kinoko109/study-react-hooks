import React, {useCallback, useRef, useState} from "react";

const UseRef = () => {

  const inputEl = useRef(null)
  const [text,changeText] = useState("")
  const handleClick = useCallback(()=>{
    // @ts-ignore
    changeText(inputEl.current.value)
  },[])

  return (
    <>
      <p>text : {text}</p>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>セット</button>
    </>
  )
}

export default UseRef;
