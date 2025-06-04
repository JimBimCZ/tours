

interface Props {
    id: string;
    image: string;
    name: string;
    info: string;
    price: string;
}

export const Tour = (props: Props) => {
    const {name, info, image, price} = props;
    return (<div className='tour'>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{info}</p>
        <div>{price}</div>
    </div>)
};