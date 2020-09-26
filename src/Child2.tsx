import React, { useContext } from "react";
import Child3 from "./Child3";
import AppStateContext from "./AppContext";

export default function () {
  const state = useContext(AppStateContext.state);
  const dispatch = useContext(AppStateContext.dispatch);

  return (
    <div>
      Child 2. Rendered at: {new Date().getUTCMilliseconds()}. Selected
      component: {state.selectedComponent}. &nbsp;
      <button
        onClick={() => dispatch({ type: "SelectComponentMsg", component: "2" })}
      >
        Global: Select 2
      </button>
      <hr />
      <Child3 key="Child 3" />
    </div>
  );
}
