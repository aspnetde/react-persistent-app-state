import React, { memo, useContext } from "react";
import AppStateContext from "./AppContext";
import Child4 from "./Child4";

export default memo(() => {
  const dispatch = useContext(AppStateContext.dispatch);

  return (
    <div>
      Child 3. Rendered at: {new Date().getUTCMilliseconds()}. &nbsp;
      <button onClick={() => dispatch({ type: "ResetComponentMsg" })}>
        Global: Reset
      </button>
      <hr />
      <Child4 />
    </div>
  );
});
