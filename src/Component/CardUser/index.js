import classNames from "classnames/bind";

import style from "./CardUser.module.scss";
const cx = classNames.bind(style);

function CardUser({ image, name }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("avatar")}>
                <img src={image} alt="Photo"/>
            </div>
            <div className={cx("name")}>
                {name}
            </div>
        </div>
    );
}

export default CardUser;