import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import * as getServices from "~/apiServices/getServices.js";
import * as constant from "~/constants/constants";
import { categoryIcons } from "~/constants/constants.js";
import { formatter } from "~/constants/constants";
import { modifyTourName } from "~/constants/constants";

import style from "./TourElementStyle.module.scss";
const cx = classNames.bind(style);

function TourElement(props) {
    const navigate = useNavigate();

    const [tours, setTours] = useState([]);
    const [tourCategory, setTourCategory] = useState([]);

    const { topicID } = props;
    const { topics } = constant;

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await getServices.getTour('ControllerTour.php');
                setTours(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await getServices.getTourCategory('ControllerTour.php');
                setTourCategory(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, []);

    const handleClick = (name) => {
        let tourName = modifyTourName(name, "PATH");
        navigate(`/tours/${tourName}`);
    };

    return (
        tours.map(tour => (
            tour.topicID === topicID
            && <div className={cx('grid-layout__item', '--flexbox')} key={tour.id}>
                <div className={cx('grid-layout__item__top')}>
                    <div className={cx('grid-layout__item__top__decorate-top')}>
                        <div className={cx('cart-shopping')}
                            onClick={() => handleClick(tour.name)}
                        >
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <div className={cx('see-more')}
                            onClick={() => handleClick(tour.name)}
                        >
                            Xem thêm
                        </div>
                    </div>
                    <div className={cx('grid-layout__item__top__angle-wrap')}>
                        {topics.map((topic, index) => (
                            topic.id === tour.topicID &&
                            <div className={cx('grid-layout__item__top__angle')}
                                key={index}
                                style={{ backgroundColor: `${topic.style}` }}
                            >
                                {topic.text}
                            </div>
                        ))}
                    </div>
                    <div className={cx('grid-layout__item__top__image')}>
                        <img src={tour.image} alt="" />
                    </div>
                    <div className={cx('grid-layout__item__top__price')}>
                        <p href="#">{formatter.format(tour.price)}</p>
                    </div>
                    <div className={cx('grid-layout__item__top__icon')}>
                        {
                            tourCategory.map(category => (
                                categoryIcons.map((categoryIcon, index) => (
                                    tour.id === category.id_tour
                                    && category.id_category === categoryIcon.id
                                    && <Tippy content={category.name} key={index}>
                                        <a href="/" id={cx(`${categoryIcon.content}`)}></a>
                                    </Tippy>
                                ))
                            ))
                        }
                    </div>
                </div>
                <div className={cx('grid-layout__item__content')}>
                    <div className={cx('content__top')}>
                        <div className={cx('content__top__title')}
                            onClick={() => handleClick(tour.name)}
                            style={{ cursor: "pointer" }}
                        >
                            {tour.name}
                        </div>
                        <div className={cx('content__top__description')}>{tour.description}</div>
                    </div>
                    <div className={cx('content__bottom')}>
                        <a
                            className={cx('arrow-right', '--cursor-pointer')}
                            onClick={() => handleClick(tour.name)}
                        >
                            <i className={cx('fa-solid fa-arrow-right fa-2x')}></i>
                        </a>
                    </div>
                </div>
            </div >
        ))
    );
}
export default TourElement;