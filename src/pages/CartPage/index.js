import classNames from 'classnames/bind';
import { useEffect, useState, useContext } from 'react';

import * as getServices from '~/apiServices/getServices';
import * as putServices from '~/apiServices/putServices';
import * as postServices from "~/apiServices/postServices";
import * as deleteServices from '~/apiServices/deleteServices';
import CartHeader from '~/Component/Cart/CartHeader';
import CartList from '~/Component/Cart/CartList';
import CartActions from '~/Component/Cart/CartActions';
import CartFooter from '~/Component/Cart/CartFooter';
import Context from '~/Component/Context/context';

import style from '~/Component/PageStyle/CartStyle/CartStyle.module.scss';
const cx = classNames.bind(style);

function CartPage() {
    const context = useContext(Context);
    const { message, setMessage } = context;

    const [tours, setTours] = useState([]);
    const [quantity, setQuantity] = useState({
        id: "",
        quantity: ""
    });
    const [couponCode, setCouponCode] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await getServices.getTourBooked('ControllerTour.php', {
                    name: "booked",
                    data: "cart"
                });
                setTours(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, []);

    useEffect(() => {
        const checkAPI = async () => {
            try {
                const response = await getServices.getCoupon('ControllerTour.php', {
                    name: "coupon"
                });
                setCouponCode(...response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        checkAPI();
    }, [message]);

    const cartTotal = tours.reduce(function (total, currentValue) {
        return currentValue.paymentStatus === 0
            ? total + currentValue.price * currentValue.quantity
            : total;
    }, 0);

    const handleIncreasement = (tour) => {
        const index = tours.findIndex(function (item) {
            return item.cartID === tour.cartID;
        });

        const newTour = [...tours];
        newTour[index] = { ...tour };
        newTour[index].quantity = tour.quantity + (tour.quantity < 9 ? 1 : 0);

        setQuantity({
            id: newTour[index].cartID,
            quantity: newTour[index].quantity
        });
        setTours(newTour);
    };

    const handleDecreasement = (tour) => {
        const index = tours.findIndex(function (item) {
            return item.cartID === tour.cartID;
        });

        const newTour = [...tours];
        newTour[index] = { ...tour };
        newTour[index].quantity = newTour[index].quantity - (newTour[index].quantity > 1 ? 1 : 0);

        setQuantity({
            id: newTour[index].cartID,
            quantity: newTour[index].quantity
        });
        setTours(newTour);
    };

    useEffect(() => {
        const updateQuantity = async () => {
            try {
                const response = await putServices.updateTourBookDetail('ControllerTour.php', {
                    name: "quantity",
                    data: quantity
                });
                setMessage(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        updateQuantity();
    }, [quantity]);

    const handleRemove = (id) => {
        const deleteAPI = async () => {
            try {
                const response = await deleteServices.deleteCartByID('ControllerTour.php', id);
                setMessage(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        deleteAPI();

        const newTours = tours.filter(function (item) {
            return item.cartID !== id;
        });
        setTours(newTours);
    };

    const handleApply = (coupon) => {
        const applyCounpon = async () => {
            try {
                const response = await postServices.applyCoupon('ControllerTour.php', {
                    name: "coupon",
                    data: coupon
                });
                setMessage(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        applyCounpon();
    };

    return (
        <>
            <div className={cx("product-box", "padding-all")}>
                <table>
                    <tbody>
                        <CartHeader />
                        <CartList
                            data={tours}
                            onclickRemove={handleRemove}
                            onclickIncreasement={handleIncreasement}
                            onclickDecreasement={handleDecreasement}
                        />
                        <tr>
                            <CartActions
                                onclickApply={handleApply}
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={cx("cart-collaterals")}>
                <CartFooter
                    total={cartTotal}
                    coupon={couponCode}
                />
            </div>
            {/* <Alert
                value={couponCode ? couponCode.value : 0}
            /> */}
        </>
    );
}

export default CartPage;