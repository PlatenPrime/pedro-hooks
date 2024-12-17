import { useContext, useEffect } from "react";
import { GlobalStateContext } from "./context";

export const ChildDisplay = () => {
  useEffect(() => {
    console.log("ChildDisplay useEffect");
  }, []);

  console.log("ChildDisplay");

  const { isToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <p>Current State: {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};
