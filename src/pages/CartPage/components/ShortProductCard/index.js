import styles from './styles.module.scss'
const ShortProductCard = ({ name, image, price, quantity, handleAddValue, handleReduceValue, handleRemove }) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <div>
                <button onClick={handleAddValue}>+</button>
                <button onClick={handleReduceValue}>-</button>
                <p>quantity: {quantity}</p>
                <button onClick={handleRemove}>delete</button>
            </div>
            <div>
                <p>price: {price*quantity}</p>
            </div>
        </div>
    );
};

export default ShortProductCard;