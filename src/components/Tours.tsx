import type {TourData} from "../types/TourData.ts";
import {Tour} from "./Tour.tsx";


interface Props {
    data: TourData[];
}

export const Tours = (props: Props) => {
    const {data} = props;
    return (<section className='tours'>{data && data.map(datum => <Tour key={datum.id} {...datum} />)}</section>)
}