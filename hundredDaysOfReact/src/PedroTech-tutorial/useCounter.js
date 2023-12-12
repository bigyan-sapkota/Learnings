// Create a counter app as custom hook
import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [state, setState] = useState(initialValue);

  const inc = () => {
    setState(state + 1);
  };

  const dec = () => {
    setState(state - 1);
  };

  const res = () => {
    setState(initialValue);
  };

  return [state, inc, dec, res];
};
