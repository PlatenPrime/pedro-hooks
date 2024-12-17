import { useState } from "react";
import { ChildDisplay } from "./ChildDisplay";
import { ChildToggle } from "./ChildToggle";
import FreeComponent from "./FreeComponent";
import { GlobalStateContext } from "./context";

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
      <FreeComponent />
    </GlobalStateContext.Provider>
  );
};
