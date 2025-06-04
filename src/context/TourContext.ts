import { createContext } from "react";
import type { AppContextType } from "./AppContext.tsx";

export const TourContext = createContext<AppContextType>({
  toursData: [],
  setToursData: () => {},
});
