import classNames from "classnames/bind";

import style from '~/Component/PageStyle/CartStyle/CartStyle.module.scss';
const cx = classNames.bind(style);

function CartHeader(params) {
    return (
        <tr className={cx("title")}>
            <th className={cx("product-remove")}>&nbsp;</th>
            <th className={cx("product-thumbnail")}>&nbsp;</th>
            <th className={cx("product-name")}>Tên Tour</th>
            <th className={cx("product-price")}>Giá</th>
            <th className={cx("product-quantity")}>Số lượng</th>
            <th className={cx("product-subtotal")}>Tổng</th>
            <th className={cx("product-payment")}>Trạng thái</th>
        </tr>
    );
}

export default CartHeader;