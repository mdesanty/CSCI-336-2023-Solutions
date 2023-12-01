import { useState } from "react";

function ColorChanger() {
  const [colorClass, setColorClass] = useState("bg-green");

  return (
    <div id="color-changer">
      <h1 className={colorClass}>Hello</h1>
      <div id="buttons">
        <button onClick={() => setColorClass("bg-green")}>Green</button>
        <button onClick={() => setColorClass("bg-red")}>Red</button>
        <button onClick={() => setColorClass("bg-purple")}>Purple</button>
      </div>
    </div>
  );
}

export default ColorChanger;