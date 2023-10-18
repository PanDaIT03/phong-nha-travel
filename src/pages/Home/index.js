import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faStar } from '@fortawesome/free-solid-svg-icons';

import globalImage from '~/asset/images';
import Slider from '~/Component/Slider';
import { images } from '~/Component/Slider/images';
import TourElement from '~/Component/TourElement';
import FindATour from '~/Component/FindATour';
import Contract from '~/Component/Contract';
import ChooseDifference from '~/Component/ChooseDifference';
import GridTour from '~/Component/GridTour';
import Button from '~/Component/Button';
import CardUser from '~/Component/CardUser';
import FeedBack from '~/Component/FeedBack';
import BackToTop from '~/Component/BackToTop';

import style from '~/Component/PageStyle/HomeStyle/HomeStyle.module.scss';
const cx = classNames.bind(style);

function Home() {
    const rated = [
        {
            name: "Phúc Đại",
            image: globalImage.userAvatar,
            title: "Tour ghép Phong Nha hàng ngày",
            description: "Phong nha travel rất tuyệt vời. Làm việc chuyên nghiệp, Gia đình chúng tôi rất vui dc trãi nghiệm QB cùng phong nha travel",
            score: 5
        },
        {
            name: "Dương Đại",
            image: globalImage.userAvatar,
            title: "Tour ghép Phong Nha hàng ngày",
            description: "Tour rất tuyệt.",
            score: 4
        },
    ];

    const rates = (score) => {
        let rate = [];
        for (let i = 0; i < score; i++) {
            rate.push(i);
        }

        return rate.map((item, index) => (
            <FontAwesomeIcon icon={faStar} key={index} />
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <Slider images={images} />

            <GridTour
                title="Có thể bạn sẽ thích những TOUR du lịch dưới đây"
                description="tour quảng bình nổi bật"
                primary
            >
                <TourElement topicID={1} key={1} />
            </GridTour>

            <GridTour
                title="tour hằng ngày"
                description="Những tour du lịch hằng ngày trên Phong Nha Travel"
            >
                <TourElement topicID={2} key={3} />
            </GridTour>

            <ChooseDifference />

            <GridTour
                title="tour đang ưu đãi"
                description="Những tour du lịch hằng ngày trên Phong Nha Travel"
            >
                <TourElement topicID={3} key={3} />
            </GridTour>

            <div className={cx('swipper-wrapper')}>
                <FindATour />
                <div className={cx('discovery-review')}>
                    <FeedBack
                        title="Khám phá"
                    >
                        <img className={cx("image-wrap", "--cursor-pointer")}
                            src='../images/ThungLungHava.jpeg'
                            alt="ThungLungHava"
                        />
                        <div className={cx('post-item-content')}>
                            <div className={cx('post-item-content__title')}>
                                Thung Lũng Hava điểm trãi nghiệm mới ở Sông Chày
                            </div>
                            <div className={cx('post-item-content__description')}>
                                Thung Lũng Hava điểm trãi nghiệm mới ở Sông Chày Vị Trí đặc địa nằm trên cung đường danh thắng Phong nha - kẻ bàng Thung lũng
                            </div>
                            <Button
                                primary
                                rightIcon={<FontAwesomeIcon icon={faArrowRightLong} />}
                            >
                                Tìm Hiểu Thêm
                            </Button>
                        </div>
                    </FeedBack>

                    <FeedBack
                        title="Tour Reviews"
                    >
                        <div className={cx("reviews")}>
                            {rated.map((item, index) => (
                                <div className={cx("reviews-item")} key={index}>
                                    <div className={cx("reviews-item__info")}>
                                        <CardUser
                                            image={item.image}
                                            name={item.name}
                                        />
                                    </div>
                                    <div className={cx("reviews-item__content")}>
                                        <div className={cx("title")}>
                                            {item.title}
                                        </div>
                                        <div className={cx("description")}>
                                            {item.description}
                                        </div>
                                        <div className={cx("rating")}>
                                            {rates(item.score)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FeedBack>
                </div>
            </div>

            <div className={cx('wpb_wrapper')}>
                <div className={cx('wpb_wrapper__content')}>
                    <span id='left' className={cx('line')}></span>
                    <div className={cx('wpb_wrapper__image --flexbox flexbox--center')}>
                        <i className={cx('fa-regular fa-image')}></i>
                    </div>
                    <div className={cx('wpb_wrapper__title')}>Hình ảnh từ Phong Nha Travel</div>
                    <span id='right' className={cx('line')}></span>
                </div>
            </div>

            <div className={cx('social_network_icon')} style={{ position: "fixed", bottom: "10%", zIndex: "12" }}>
                <Contract
                    icon={globalImage.zaloIcon}
                    imgCircle="#2196F3"
                    circleFill="rgba(33, 150, 243, 0.7)"
                    bar=""
                    link="https://zalo.me/0939761247"
                />
                <Contract
                    icon={globalImage.phoneIcon}
                    imgCircle="#dc3433"
                    circleFill="#a62c26"
                    bar="0939761247"
                    link=""
                />
            </div>

            <BackToTop />
        </div>
    );
}

export default Home;