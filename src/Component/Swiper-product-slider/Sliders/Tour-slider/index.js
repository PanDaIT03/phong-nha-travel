import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import Proptypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import { Thumbs, Navigation, Autoplay } from "swiper";

import Card from "~/Component/CardTour";
import SwiperNavButtons from "~/Component/Swiper-product-slider/Sliders/Tour-slider/SwiperNavButtons";
import style from "./TourSlider.module.scss";

const cx = classNames.bind(style);

const TourImagesSlider = params => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={1}
            grabCursor={true}
            loopFillGroupWithBlank={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Thumbs, Navigation, Autoplay]}
            className={cx("tour-images-slider")}
        >
            {
                params.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card images={item} id={index + 1} />
                    </SwiperSlide>
                ))
            }
            <SwiperNavButtons />
        </Swiper>
    );
};

TourImagesSlider.prototype = {
    images: Proptypes.array.isRequired
}

export default TourImagesSlider;