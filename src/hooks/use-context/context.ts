import { createContext } from "react";

type GlobalStateContextType = {
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalStateContext = createContext<GlobalStateContextType>({
  isToggle: true,
  setIsToggle: () => {},
});
