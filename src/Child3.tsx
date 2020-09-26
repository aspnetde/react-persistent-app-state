import React, { useContext, useMemo } from "react";
import AppStateContext from "./AppContext";

export default function () {
  const dispatch = useContext(AppStateContext.dispatch);

  const renderTime = useMemo(() => new Date().getUTCMilliseconds(), []);

  return (
    <div>
      Child 3. Rendered: {renderTime}. &nbsp;{" "}
      <button onClick={() => dispatch({ type: "ResetComponentMsg" })}>
        Reset
      </button>
    </div>
  );
}
