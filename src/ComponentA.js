import React, { useContext, createContext, } from "react";

import ComponentB from "./ComponentB";



const ComponentA = () => {
  return (
    <div>
      
      <div className="box">
        <h1>
        <button onClick={() => "dispatch"({ type: "increment" })}>
        increment{" "}
      </button>
          <ComponentB />
        </h1>
      </div>
    </div>
  );
};

export default ComponentA;
