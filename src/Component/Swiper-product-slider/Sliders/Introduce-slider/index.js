import { useState } from "react";
import Proptypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import "./IntroSlider.scss";

const ImageSlider = params => {
    const [activeThumb, setActiveThumb] = useState();

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                grabCursor={true}
                navigation={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Thumbs, Navigation]}
                thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
                className="tour-images-slider"
            >
                {
                    params.images.map((item, index) => (
                        <SwiperSlide key={index} >
                            <img src={item} alt="Slider Images" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                spaceBetween={10}
                onSwiper={setActiveThumb}
                slidesPerView={params.images.length}
                modules={[Thumbs, Navigation]}
                className="tour-images-slider-thumbs"
                style={{ width: `${10 * params.images.length}rem` }}
            >
                {
                    params.images.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div className="tour-images-slider-thumbs-wrapper">
                                <img src={item} alt="Slider Images" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

ImageSlider.prototype = {
    images: Proptypes.array.isRequired
}

export default ImageSlider;