import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

import style from "~/Component/PageStyle/CartStyle/CartStyle.module.scss";
import { formatter } from '~/constants/constants';

const cx = classNames.bind(style);

function CartItem(params) {
    const navigate = useNavigate();
    const { tour, onclickRemove, onclickIncreasement, onclickDecreasement } = params;

    const date = new Date(tour.bookeDate);
    const formattedDate = date.toLocaleDateString('en-GB');

    return (
        <tr className={cx("product-item")}>
            <td className={cx("remove", "--cursor-pointer")} onClick={() => onclickRemove(tour.cartID)}>
                <div className={cx("cover", "--flexbox", "flexbox--center")}>
                    <span className={cx("remove-icon")}><FontAwesomeIcon icon={faX} /></span>
                </div>
            </td>
            <td className={cx("image", "--flexbox", "flexbox--center")}>
                <img src={tour.image} alt='tour' />
            </td>
            <td className={cx("product-name")}>
                <span
                    className={cx("--cursor-pointer")}
                    onClick={() => navigate(`/tours/${tour.name}`)}
                >
                    {tour.name}
                </span>
                <div className={cx("variation")}>
                    <div className={cx("variation-bookingDate")}>Ngày đặt: {formattedDate}</div>
                </div>
            </td>
            <td className={cx("product-price", "text-center")}>{formatter.format(tour.price)}</td>
            <td className={cx("product-quantity", "text-center")}>
                <div className={cx("box-quantity", "--flexbox", "flexbox--center")}>
                    <input
                        type="button"
                        className={cx("btn-decreament")}
                        value="-"
                        onClick={() => onclickDecreasement(tour)}
                    />
                    <div className={cx("quantity")}>{tour.quantity}</div>
                    <input
                        type="button"
                        className={cx("btn-increament")}
                        value="+"
                        onClick={() => onclickIncreasement(tour)}
                    />
                </div>
            </td>
            <td className={cx("product-subtotal", "text-center")}>{formatter.format(tour.price * tour.quantity)}</td>
            <td className={cx("payment-status")}>
                {
                    tour.paymentStatus === 0
                        ? <div className={cx("payment-decorate", "fail")}>
                            <FontAwesomeIcon icon={faX} />
                        </div>
                        : <div className={cx("payment-decorate", "complete")}>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                }
            </td>
        </tr>
    );
}

export default CartItem;