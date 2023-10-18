import CartItem from "../CartItem";

function CartList(params) {
    const { data, onclickRemove, onclickIncreasement, onclickDecreasement } = params;

    return (
        <>
            {data.map((tour, index) => (
                <CartItem
                    tour={tour}
                    key={index}
                    onclickRemove={onclickRemove}
                    onclickIncreasement={onclickIncreasement}
                    onclickDecreasement={onclickDecreasement}
                />
            ))}
        </>
    );
}

export default CartList;