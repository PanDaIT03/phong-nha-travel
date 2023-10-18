import classNames from "classnames/bind";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import style from "./Slider.module.scss";
const cx = classNames.bind(style);

function Slider({ images, className }) {
    const classes = cx("wrapper-slider", {
        [className]: className
    });

    const [counter, setCounter] = useState(0);
    let length = images.length;

    const handleClick = (type) => {
        switch (type) {
            case "PREV":
                setCounter(counter === 0 ? length - 1 : counter - 1);
                break;
            default:
                setCounter(counter === length - 1 ? 0 : counter + 1);
                break;
        };
    };

    const handleClickThumbsSlide = (index) => {
        setCounter(index);
    };

    useEffect(() => {
        const id = setInterval(() => {
            setCounter((prev) => {
                if(prev === length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 6000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className={classes}>
            <div className={cx("btn-previous")} onClick={() => handleClick("PREV")}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
            <div className={cx("slider-items")}>
                {images.map((item, index) => (
                    <img
                        src={item}
                        key={index}
                        className={cx("item", index === counter ? "active" : "inactive")}
                    />
                ))}
            </div>
            <div className={cx("slider-thumbs")}>
                {images.map((item, index) => (
                    <img
                        src={item}
                        key={index}
                        className={cx("item", index === counter && "active")}
                        onClick={() => handleClickThumbsSlide(index)}
                    />
                ))}
            </div>
            <div className={cx("btn-next")} onClick={() => handleClick()}>
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
        </div>
    );
};

Slider.prototype = {
    images: Proptypes.array.isRequired,
    classNames: Proptypes.string
};

export default Slider;