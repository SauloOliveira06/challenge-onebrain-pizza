import { useState } from "react";

export function useOpenPizza() {
  const [openPizza, setOpenPizza] = useState();

  return {
    openPizza,
    setOpenPizza,
  };
}
