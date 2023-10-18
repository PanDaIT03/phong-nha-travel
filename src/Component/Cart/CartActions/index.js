import classNames from "classnames/bind";
import { useState } from "react";

import Button from '~/Component/Button';
import style from "~/Component/PageStyle/CartStyle/CartStyle.module.scss";
const cx = classNames.bind(style);

function CartActions(params) {
    const { onclickApply } = params;
    const [coupon, setCoupon] = useState('');

    const handleChange = (e) => {
        setCoupon(e.target.value);
    };

    return (
        <td colSpan={8} className={cx("actions")}>
            <div className={cx("content", "--flexbox", "flex-spaceBetween")}>
                <div className={cx("counpon")}>
                    <input
                        placeholder="Mã giảm giá"
                        onChange={e => handleChange(e)}
                        value={coupon}
                        style={{ marginRight: "1rem" }}
                    />
                    <Button
                        apply
                        type="small"
                        onClick={() => onclickApply(coupon)}
                    >
                        Áp dụng
                    </Button>
                </div>
                <div className={cx("update-cart")}>
                    <Button update type="small">
                        Cập nhật
                    </Button>
                </div>
            </div>
        </td>
    );
}

export default CartActions;