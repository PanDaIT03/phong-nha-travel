import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import TourImagesSlider from "~/Component/Swiper-product-slider/Sliders/Tour-slider";
import { tourImagesSlider } from "~/Component/Swiper-product-slider/Images/Tour-slider";

import style from "./FindATour.module.scss";
const cx = classNames.bind(style);

function FindATour({ props }) {
    const classes = cx("wrapper", {});

    return (
        <div className={classes}>
            <div className={cx('find-a-tour__sub-title')}>Find a Tour by</div>
            <div className={cx('find-a-tour__title-primary')}>
                <h3>Phong Nha Travel</h3>
            </div>
            <div className={cx('find-a-tour__slide')}>
                <TourImagesSlider images={tourImagesSlider} />
            </div>
        </div>
    );
}

export default FindATour;