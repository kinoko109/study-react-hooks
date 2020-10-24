import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import UseCallback from "../Hooks/UseCallback";
import UseEffect from "../Hooks/UseEffect";
import UseMemo from "../Hooks/UseMemo";
import UseContext from "../Hooks/UseContext";
import UseRef from "../Hooks/UseRef";
import UseLayoutEffect from "../Hooks/UseLayoutEffect";
import UseDebugValue from "../Hooks/UseDebugValue";
import UseImperativeHandle from "../Hooks/UseImperativeHandle";
import Home from "../Home";
import UseReducer from "../Hooks/UseReducer";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/useCallback" component={UseCallback}/>
        <Route path="/useEffect" component={UseEffect}/>
        <Route path="/useMemo" component={UseMemo}/>
        <Route path="/useContext" component={UseContext}/>
        <Route path="/useRef" component={UseRef}/>
        <Route path="/useReducer" component={UseReducer}/>
        <Route path="/useLayoutEffect" component={UseLayoutEffect}/>
        <Route path="/useDebugValue" component={UseDebugValue}/>
        <Route path="/useImperativeHandle" component={UseImperativeHandle}/>
      </Router>
    </>
  );
}

export default App;
