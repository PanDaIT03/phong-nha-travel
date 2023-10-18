import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import { formatter } from "~/constants/constants";
import Button from "~/Component/Button";
import style from "~/Component/PageStyle/CartStyle/CartStyle.module.scss"
const cx = classNames.bind(style);

function CartFooter(params) {
    const navigate = useNavigate();
    const { total, coupon } = params;

    return (
        <div className={cx("cart-totals")}>
            <div className={cx("title")}>
                <h2>Cart Totals</h2>
            </div>
            <div className={cx("content", "padding-all")}>
                <table>
                    <tbody>
                        <tr className={cx("cart-delivery")}>
                            <th>Giao hàng</th>
                            <td>
                                <p className={cx("shipping-method")}>Miễn phí giao hàng</p>
                            </td>
                        </tr>
                        <tr className={cx("cart-coupon")}>
                            <th>Mã giảm giá</th>
                            {
                                coupon
                                    ? <td>{coupon.code}: {coupon.value}%</td>
                                    : <td>Không có</td>
                            }
                        </tr>
                        <tr className={cx("cart-total")}>
                            <th>Tổng cộng</th>
                            <td style={{ fontWeight: "bold" }}>
                                {
                                    formatter.format(
                                        coupon
                                            ? `${total - (total * coupon.value / 100)}`
                                            : `${total}`
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button checkout onClick={() => navigate(`/checkout-page`)}>
                    Tiến hành thanh toán
                </Button>
            </div>
        </div>
    );
}

export default CartFooter;