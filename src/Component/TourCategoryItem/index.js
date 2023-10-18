import classNames from "classnames/bind";
import { formatter } from "~/constants/constants";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { modifyTourName } from "~/constants/constants";
import style from "~/Component/PageStyle/TourCategory/TourCategory.module.scss";
const cx = classNames.bind(style);

function TourCategoryItem({ data }) {
    const navigate = useNavigate(),
        { image, name, description, priceAdult } = data;

    const handleClick = (name) => {
        let tourName = modifyTourName(name, "PATH");
        navigate(`/tours/${tourName}`);
    };

    return (
        <div className={cx("item")}>
            <div className={cx("item-left")}>
                <img src={image} />
                <div className={cx("icon")}></div>
                <div className={cx("angle-wrap")}></div>
            </div>
            <div className={cx("item-right")}>
                <div className={cx("item-right__content")}>
                    <h2
                        className={cx("title")}
                        onClick={() => handleClick(name)}
                    >
                        {name}
                    </h2>
                    <div className={cx("description")}>{description}</div>
                </div>
                <div className={cx("item-right__price")}>
                    <div className={cx("price")}>{formatter.format(priceAdult)}</div>
                    <div className={cx("label")}>per person</div>
                    <div className={cx("btn-read-more")}>
                        <Button
                            apply
                            className={cx("read-more")}
                        >
                            View Tour
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCategoryItem;