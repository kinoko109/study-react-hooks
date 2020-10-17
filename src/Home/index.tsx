import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/useCallback">useCallback</Link></li>
        <li><Link to="/useContext">useContext</Link></li>
        <li><Link to="/useDebugValue">useDebugValue</Link></li>
        <li><Link to="/useEffect">useEffect</Link></li>
        <li><Link to="/useImperativeHandle">useImperativeHandle</Link></li>
        <li><Link to="/useLayoutEffect">useLayoutEffect</Link></li>
        <li><Link to="/useMemo">useMemo</Link></li>
        <li><Link to="/useReducer">useReducer</Link></li>
        <li><Link to="/useRef">useRef</Link></li>
      </ul>
    </div>
  )
}

export default Home;
