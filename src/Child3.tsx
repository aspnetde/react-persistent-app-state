import React, { useContext } from "react";
import AppStateContext from "./AppContext";
import Child4 from "./Child4";

export default function () {
  const dispatch = useContext(AppStateContext.dispatch);

  return (
    <div>
      Child 3. Rendered: {new Date().getUTCMilliseconds()}. &nbsp;{" "}
      <button onClick={() => dispatch({ type: "ResetComponentMsg" })}>
        Reset
      </button>
      <hr />
      <Child4 />
    </div>
  );
}
