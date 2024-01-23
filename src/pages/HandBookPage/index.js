import classNames from "classnames/bind";

import images from "~/asset/images";

import styles from "~/sass/TravelGuide.module.scss";
const cx = classNames.bind(styles);

function HandBookPage() {
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div
                    className={cx("content__header")}
                    style={{
                        backgroundImage: `url(${images.phongNhaVietNam})`,
                        backgroundRepeat: "repeat",
                        backgroundPosition: "50% 0"
                    }}
                >
                    <div className={cx("title-primary")}><h2>Cẩm nang</h2></div>
                    <div className={cx("description-primary")}>Tin tức mới nhất Phong Nha Travel</div>
                </div>
                
            </div>
        </div>
    );
};

export default HandBookPage;