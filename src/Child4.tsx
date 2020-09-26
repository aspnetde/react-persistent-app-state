import React, { useState, useContext } from "react";
import AppStateContext from "./AppContext";

export default function () {
  const dispatch = useContext(AppStateContext.dispatch);
  const [state, setState] = useState(new Date().getUTCMilliseconds());

  return (
    <div>
      Child 4. Local state: {state} &nbsp;
      <button onClick={() => setState(new Date().getUTCMilliseconds())}>
        Reset local state
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "ResetComponentMsg" })}>
        Reset global state
      </button>
    </div>
  );
}
