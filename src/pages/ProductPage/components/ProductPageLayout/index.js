import AbilityCard from "../AbilityCard";
import StatCard from "../StatCard";
import { CircularProgress } from '@mui/material';

const ProductPageLayout = ({ abilities, pokemonID, image, name, price, stats, isLoading }) => {

    return (
        <>
            {isLoading? <CircularProgress/> : <>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <h3>id : {pokemonID}</h3>
            <h3>price: {price}</h3>
            {abilities && abilities.map(({title, description}) => {
                return <AbilityCard key={title} title={title} description={description}/>
            })}
            {stats && stats.map(({title, value}) => {
                return <StatCard key={title} title={title} value={value}/>
            })}
            </>}
        </>
    );
};

export default ProductPageLayout;