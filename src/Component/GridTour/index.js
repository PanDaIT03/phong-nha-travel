import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import style from "./GridTour.module.scss";
const cx = classNames.bind(style);

function GridTour({ title, description, children, primary = false }) {
    const classes = cx("wrapper", {
        primary
    });

    return (
        <div className={classes}>
            <div className={cx("title-block")}>
                <div className={cx('title-block__text-wrap')}>
                    <h3 className={cx("title-block__title")}>
                        {title}
                    </h3>
                    <div className={cx('title-block__description')}>
                        {description}
                    </div>
                </div>
                {
                    !primary &&
                    <Button
                        primary
                        rightIcon={<FontAwesomeIcon icon={faArrowRightLong}/>}
                    >
                        Xem chi tiết
                    </Button>
                }
            </div>
            <div className={cx('grid-layout')}>
                {children}
            </div>
        </div>
    );
}

export default GridTour;