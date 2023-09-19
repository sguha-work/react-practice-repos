import React, { useState, useMemo, useEffect } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {console.log('double number called');
    return slowFunction(number);
  },[number]);
  const themeStayles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    };
  },[dark]);
  useEffect(() => {
    console.log("theme changed");
  }, [themeStayles]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change theme
      </button>
      <div style={themeStayles}>doble number={doubleNumber}</div>
    </>
  );
}
const j = 10000;
function slowFunction(num) {
  for (let i = 0; i <= j; i++) {
    for (let k = 0; k <= 10000; k++) {
      for(let x=0;x<10;x++){}
    }
  }
  return num * 2;
}
export default App;

