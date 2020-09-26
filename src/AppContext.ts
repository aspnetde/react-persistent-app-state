import { createContext, Dispatch } from "react";

export interface AppState {
  selectedComponent: string | undefined;
}

type SelectComponentMsg = {
  type: "SelectComponentMsg";
  component: string;
};

type ResetComponentMsg = {
  type: "ResetComponentMsg";
};

export type Msg = SelectComponentMsg | ResetComponentMsg;

export function updateState(state: AppState, msg: Msg) {
  switch (msg.type) {
    case "SelectComponentMsg":
      return { ...state, selectedComponent: msg.component };
    case "ResetComponentMsg":
      return { ...state, selectedComponent: undefined };
  }
}

export default {
  state: createContext<AppState>({} as AppState),
  dispatch: createContext<Dispatch<Msg>>((msg) => {
    console.warn("No op: " + msg.type);
  }),
};
