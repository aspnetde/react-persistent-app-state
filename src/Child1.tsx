import React, { useContext, useMemo } from "react";
import Child2 from "./Child2";
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
      Child 1. Rendered: {renderTime}
      <button
        onClick={() => dispatch({ type: "SelectComponentMsg", component: "1" })}
      >
        Select me.
      </button>
      <hr />
      <Child2 key="Child 2" />
    </div>
  );
}
