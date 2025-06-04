import { useContext, useEffect, useState } from "react";
import { Tours } from "./components/Tours.tsx";
import { TourContext } from "./context/TourContext.ts";

const url = "https://www.course-api.com/react-tours-project";
//haha

const App = () => {
  const { toursData, setToursData } = useContext(TourContext);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = fetch(url).then((res) => res.json());
    setToursData(await data);
  };

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  const onRefreshClick = () => {
    setLoading(true);
    fetchData().then(() => setLoading(false));
  };

  return (
    <div className="container">
      {" "}
      {!loading && toursData.length > 0 ? (
        <Tours data={toursData} />
      ) : !loading && toursData.length === 0 ? (
        <button onClick={onRefreshClick}>Refresh</button>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};
export default App;
