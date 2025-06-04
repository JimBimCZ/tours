import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";
import type { TourData } from "../types/TourData.ts";
import { TourContext } from "./TourContext.ts";

export interface AppContextType {
  toursData: TourData[];
  setToursData: Dispatch<SetStateAction<TourData[]>>;
}

interface Props {
  children: ReactNode;
}

const TourContextProvider = (props: Props) => {
  const [toursData, setToursData] = useState<TourData[]>([]);
  return (
    <TourContext.Provider value={{ toursData, setToursData }}>
      {props.children}
    </TourContext.Provider>
  );
};
export default TourContextProvider;
