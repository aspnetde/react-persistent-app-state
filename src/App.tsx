import React, { useReducer, useEffect } from "react";
import AppStateContext, { AppState, Msg, updateState } from "./AppContext";
import { useLocalStorage } from "./LocalStorage";
import Child1 from "./Child1";

function App() {
  useEffect(() => console.log("Root rendered"));

  const [persistedState, setPersistedState] = useLocalStorage(
    "State",
    {} as AppState
  );

  const persistUpdatedState = (state: AppState, msg: Msg) => {
    const updatedState = updateState(state, msg);
    setPersistedState(updatedState);
    return updatedState;
  };

  const [state, dispatch] = useReducer(persistUpdatedState, persistedState);

  return (
    <AppStateContext.dispatch.Provider value={dispatch}>
      <AppStateContext.state.Provider value={state}>
        <div>
          Root.
          <hr />
          <Child1 key="Child 1" />
        </div>
      </AppStateContext.state.Provider>
    </AppStateContext.dispatch.Provider>
  );
}

export default App;
