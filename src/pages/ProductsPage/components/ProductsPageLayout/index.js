import PokemonCard from '../../../../components/PokemonCard';
import styles from './styles.module.scss'

const ProductsPageLayout = ({ list, handleDetails, handleAddToCart }) => {
    return (
        <div className={styles.wrapper}>
            {list.map(({ id, name, image, price }, index) => (
                <PokemonCard
                    key={id}
                    id={id}
                    name={name} 
                    image={image} 
                    price={price} 
                    handleDetails={() => handleDetails(id)}
                    handleAddToCart={() => handleAddToCart(id, name, image, price)}
                />
            ))}
        </div>
    );
};

export default ProductsPageLayout;