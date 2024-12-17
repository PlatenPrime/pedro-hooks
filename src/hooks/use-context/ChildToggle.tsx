import { useContext, useEffect } from "react";
import { GlobalStateContext } from "./context";


export const ChildToggle = () => {
  useEffect(() => {
    console.log("ChildToggle useEffect");
  }, []);

  console.log("ChildToggle");

  const { setIsToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};
