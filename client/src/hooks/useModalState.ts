import { useState } from "react";

export const useModalState = (defaultState: boolean = false) => {
  const [isVisible, setIsVisible] = useState(defaultState);
  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  return { isVisible, open, close };
};
