import React, { memo, useContext } from "react";
import Child2 from "./Child2";
import AppStateContext from "./AppContext";

export default memo(() => {
  const state = useContext(AppStateContext.state);
  const dispatch = useContext(AppStateContext.dispatch);

  return (
    <div>
      Child 1. Rendered at: {new Date().getUTCMilliseconds()}. Selected
      component: {state.selectedComponent}. &nbsp;
      <button
        onClick={() => dispatch({ type: "SelectComponentMsg", component: "1" })}
      >
        Global: Select 1
      </button>
      <hr />
      <Child2 key="Child 2" />
    </div>
  );
});
