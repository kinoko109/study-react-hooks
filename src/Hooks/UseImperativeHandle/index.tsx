import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {Child, ImperativeHandleTypes} from "./Child";

const UseImperativeHandle = () => {
  const ref = useRef({} as ImperativeHandleTypes);

    return (
      <>
        <h1>useImperativeHandleのテスト</h1>
        <Link to="/">Home</Link>
        <br/>
        <br/>
        <Child ref={ref} />
        <br/>
        <br/>
        <button onClick={() => ref.current.setFocus()}>inputにフォーカスするボタン</button>
        <button onClick={() => ref.current.disabledInput()}>inputを非活性にするボタン</button>
        <button onClick={() => ref.current.activateInput()}>inputを活性にするボタン</button>
      </>
    )
}

export default UseImperativeHandle;
