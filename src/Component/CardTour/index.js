import classNames from "classnames/bind";

import style from "./CardTour.module.scss";
import * as constant from "~/constants/constants";

const cx = classNames.bind(style);

const Card = props => {
    const { images, id } = props;
    const { findATour } = constant;

    return (
        <>
            <div className={cx("card-item")}>
                <img src={images} alt="Slider Images" />
                {
                    findATour.map((item, index) => (
                        item.id === id
                        && <div className={cx("title")} key={index}>{item.text}</div>
                    ))
                }
            </div>
        </>
    );
};

export default Card;