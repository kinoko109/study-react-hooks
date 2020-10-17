import React from 'react';
import './App.css';
import UseCallback from "../Hooks/UseCallback";
import UseEffect from "../Hooks/UseEffect";
import UseMemo from "../Hooks/UseMemo";
import UseContext from "../Hooks/UseContext";
import UseRef from "../Hooks/UseRef";
import UseLayoutEffect from "../Hooks/UseLayoutEffect";
import UseDebugValue from "../Hooks/UseDebugValue";
import UseImperativeHandle from "../Hooks/UseImperativeHandle";

function App() {
  return (
      <>
        <div className="App">
          App
        </div>
        <UseCallback/>
        <UseEffect/>
        <UseMemo/>
        <UseContext/>
        <UseRef/>
        <UseLayoutEffect/>
        <UseDebugValue/>
        <UseImperativeHandle/>
      </>
  );
}

export default App;
