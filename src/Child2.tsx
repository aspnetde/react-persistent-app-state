import React, { useContext, useMemo } from "react";
import Child3 from "./Child3";
import AppStateContext from "./AppContext";

export default function () {
  const state = useContext(AppStateContext.state);
  const dispatch = useContext(AppStateContext.dispatch);

  const renderTime = useMemo(
    () =>
      new Date().getUTCMilliseconds() +
      ". Selected: (" +
      state.selectedComponent +
      "). ",
    [state]
  );

  return (
    <div>
      Child 2. Rendered: {renderTime}
      <button
        onClick={() => dispatch({ type: "SelectComponentMsg", component: "2" })}
      >
        Select me.
      </button>
      <hr />
      <Child3 key="Child 3" />
    </div>
  );
}
