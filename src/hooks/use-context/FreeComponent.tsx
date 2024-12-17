import { useEffect } from "react";

const FreeComponent = () => {
  useEffect(() => {
    console.log("Free useEffect");
  }, []);

  console.log("FreeComponent");
  return <div>FreeComponent</div>;
};

export default FreeComponent;
