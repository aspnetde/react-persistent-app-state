import React, { useState, useContext } from "react";
import AppStateContext from "./AppContext";

export default function () {
  const dispatch = useContext(AppStateContext.dispatch);
  const [state, setState] = useState(new Date().getUTCMilliseconds());

  return (
    <div>
      Child 4. Rendered at: {new Date().getUTCMilliseconds()}. &nbsp; Local
      state: {state} &nbsp;
      <button onClick={() => setState(new Date().getUTCMilliseconds())}>
        Local: Reset
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "ResetComponentMsg" })}>
        Global: Reset
      </button>
    </div>
  );
}
