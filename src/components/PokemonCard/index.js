import { useSelector } from 'react-redux';

import styles from './styles.module.scss'

const PokemonCard = ({ id, name, image, price, handleDetails, handleAddToCart }) => {
    const {itemsList} = useSelector(state => state.CartPage.info)
    console.log(itemsList);
    return (
        <div className={styles.wrapper}>
            <div className={styles.pokemonInfo}>
                <div>
                    <img src={image} alt={`${name}`}/>
                </div>
                <div className={styles.info}>
                    <h4>{name}</h4>
                    <h4>id: {id}</h4>
                    <h4>price: {price}$</h4>
                </div>
            </div>    
            <div className={styles.buttons}>
                <button className={styles.button} onClick={handleDetails}>Details</button>
                <button className={styles.button} onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
};

export default PokemonCard;