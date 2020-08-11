import React, { useState, useContext, createContext } from "react";
import { AppContext } from "../types";

const Context = createContext<AppContext>({
  tabbarState: "show",
  toggleTabbar: () => {},
});

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [tabbarState, setTabbarState] = useState<"hide" | "show">("show");

  const toggleTabbar = (state: "hide" | "show") => {
    setTabbarState(state);
  };

  const state: AppContext = {
    tabbarState,
    toggleTabbar,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
