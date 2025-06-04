import { useContext } from "react";
import { TourContext } from "../context/TourContext.ts";
import type { TourData } from "../types/TourData.ts";

interface Props {
  id: string;
  image: string;
  name: string;
  info: string;
  price: string;
}

export const Tour = (props: Props) => {
  const { name, info, image, price, id } = props;
  const { toursData, setToursData } = useContext(TourContext);

  const onBtnClick = (id: string) => {
    setToursData(toursData.filter((item: TourData) => item.id !== id));
  };

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{info}</p>
      <div>{price}</div>
      <button onClick={() => onBtnClick(id)}>Not interested</button>
    </div>
  );
};
