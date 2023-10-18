import classNames from "classnames/bind";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import style from "../TourSlider.module.scss";

const cx = classNames.bind(style);

function SwiperNavButtons() {
    const swiper = useSwiper();

    return (
        <div className={cx("swiper-nav-btns")}>
            <button className={cx("swiper-btn-prev")} onClick={() => swiper.slidePrev()}>
                <FontAwesomeIcon icon={faChevronCircleLeft} className={cx("f-23r")} />
            </button>
            <button className={cx("swiper-btn-next")} onClick={() => swiper.slideNext()}>
                <FontAwesomeIcon icon={faChevronCircleRight} className={cx("f-23r")} />
            </button>
        </div>
    );
};

export default SwiperNavButtons;