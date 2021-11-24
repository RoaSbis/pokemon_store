import { CircularProgress } from "@mui/material";
import ShortProductCard from "../ShortProductCard";

const CartPageLayout = ({ info, isLoading, handleAddValue, handleReduceValue, handleRemove, handleSendOrder }) => {
    const { totalPrice, customerId, quantity, itemsList } = info;
    return (
        <> 
            {isLoading ? 
            <CircularProgress/> : 
            <>
                <h3>Cart</h3>
                <h4>Total price is: {totalPrice}</h4>
                <p>Total quantity is: {quantity}</p>
                <div>
                    {itemsList && itemsList.map(({name, image, price, quantity, id }) => {
                        return <ShortProductCard
                            key={name}
                            name={name}
                            image={image}
                            price={price}
                            quantity={quantity}
                            id={id}
                            handleAddValue={() => handleAddValue(id, quantity + 1)}
                            handleReduceValue={() => handleReduceValue(id, quantity - 1)}
                            handleRemove={() => handleRemove(id)}/>
                     })}
                </div>
                <button onClick={() => handleSendOrder({totalPrice, customerId, itemsList})}>Send order</button>
            </>}
        </>
    );
};

export default CartPageLayout;