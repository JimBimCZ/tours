import {useEffect, useState} from "react";
import {Tours} from "./components/Tours.tsx";
import type {TourData} from "./types/TourData.ts";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
    const [toursData, setToursData] = useState<TourData[]>([])
    const [loading, setLoading] = useState(false)

     const fetchData = async () => {
        setLoading(true)
        const data = fetch(url).then(res => res.json())
        setToursData(await data)
    }

    useEffect(() => {
        fetchData().then(() => setLoading(false))

    }, [])

    console.log(toursData)

    return <div className='container'> {!loading ? < Tours data={toursData}/> : <h2>loading</h2>}</div>;
};
export default App;