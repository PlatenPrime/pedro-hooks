// Определяем тип состояния
interface State {
  count: number;
}

// Определяем возможные типы действий
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "double" };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "double":
      return { count: state.count * 2 };
    default:
      console.log("No action type");
      return state;
  }
};
