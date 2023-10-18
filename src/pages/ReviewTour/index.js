import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import FormSearch from "~/Component/FormBookTour";
import Context from "~/Component/Context/context";
import * as getServices from "~/apiServices/getServices";
import { formatter } from "~/constants/constants";
import { modifyTourName } from "~/constants/constants";

import style from "~/Component/PageStyle/ReviewTourStyle/ReviewTourStyle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(style);

function ReviewTour() {
    const context = useContext(Context);
    const params = useParams();

    const [tour, setTour] = useState([]);
    const { tourName } = params;
    const { message, setMessage } = context;

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await getServices.getTourByParams('ControllerTour.php', {
                    q: "reviewTour",
                    data: modifyTourName(tourName, "API")
                });

                setTour(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    const handleEvent = () => {
        console.log("book");
    };

    return (
        <>
            <div className={cx("review")}>
                <div className={cx("review__illustration")}
                    style={{
                        backgroundImage: `url(${tour.image})`,
                        backgroundRepeat: "repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "bottom"
                    }}
                ></div>
                <div className={cx("review__title")}>
                    <h1>{tour.name}</h1>
                </div>
            </div>
            <div className={cx("layout-container", "--flexbox")}>
                <div className={cx("layout-container__left")}>
                    <div className={cx("info-tour")}>
                        <a href="/">{tour.name}. </a>
                        <span>Là chương trình du lịch Phong Nha 1 ngày khởi hành hàng ngày, du khách sẽ có dịp trải nghiệm cuộc sống của cư dân bản địa, thưởng ngoạn bức tranh sơn thủy hữu tình của Vườn quốc gia Phong Nha Kẻ Bàng.</span>
                        <br />
                        <p style={{ marginTop: "1.5rem" }}>Tham gia <span style={{ textTransform: "uppercase" }}>{tour.name}</span>. Du khách được vui chơi các trò chơi mạo hiểm như đu dây tắm sông Chày, đu dây vào Hang Tối, chèo thuyền Kayak … , tắm bùn tự nhiên. Chiêm ngưỡng Động Phong Nha được mệnh danh là “Đệ Nhất Kỳ Quan Động” ẩn chứa bao điều kỳ diệu khiến du khách như lạc vào thế giới thần tiên.</p>
                        <div className={cx("table-info-tour")}>
                            <table border={1}>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} style={{ textAlign: "center" }}>
                                            <strong>Giá tour trọn gói VNĐ cho mỗi khách</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Giá TOUR người lớn</td>
                                        <td>{formatter.format(tour.price)}/mỗi khách</td>
                                    </tr>
                                    <tr>
                                        <td>Giá TOUR trẻ em</td>
                                        <td>{formatter.format(tour.childrenPrice)}/mỗi khách</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <em>Giá tour trọn gói trên dành cho nhóm 13  khách.</em>
                                            <br />
                                            <em>Nhóm khách đoàn từ 13 khách trở lên vui lòng liên hệ về Phong Nha Travel</em>
                                            <span> <em>0939761247</em> </span>
                                            <em>để có giá tốt hơn !</em>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4 className={cx("included")}><strong>Giá tour đã bao gồm:</strong></h4>
                        <ul className={cx("tour__list")}>
                            <li>
                                Khách sạn tiêu chuẩn: 02 hoặc 03 khách/ 01 phòng/ 02 đêm.
                            </li>
                            <li>
                                Xe tham quan du lịch đời mới, máy lạnh suốt chương trình.
                            </li>
                            <li>
                                Hướng dẫn viên Tiếng Việt chuyên tour suốt tuyến.
                            </li>
                            <li>
                                Hương & Hoa tại các điểm tâm linh.
                                <ul style={{ paddingLeft: "40px" }}>
                                    <li>
                                        Vé tham quan Động Phong Nha
                                    </li>
                                    <li>
                                        Vé thuyền rồng Động Phong Nha 2 chiều
                                    </li>
                                    <li>
                                        Vé tham quan Sông Chày – Hang Tối.
                                    </li>
                                    <li>
                                        Vé thuyền Kayak sông Chày.
                                    </li>
                                    <li>
                                        Các trò chơi trên sông Chày.
                                    </li>
                                    <li>
                                        Zipline Đu dây tắm sông.
                                    </li>
                                    <li>
                                        Zipline Đu dây vào cửa Hang Tối.
                                    </li>
                                    <li>
                                        Tắm bùn thiên nhiên tại Hang Tối
                                    </li>
                                    <li>
                                        Trang thiết bị nhà thám hiểm: nón bảo hộ, đèn pin, áo phao, mái chèo.Vé tham quan tất cả các điểm trong chương trình.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Các bữa ăn trong chương trình:
                                <ul style={{ paddingLeft: "40px" }}>
                                    <li>
                                        05 bữa chính: 120.000 đồng/ khách/ bữa ( Nếu quý khách tự do dùng bữa sẽ được khấu trừ giảm giá tour )
                                    </li>
                                    <li>
                                        03 bữa Bữa sáng
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Nước suối Lavie: 02 chai/ 01 khách/ 01 ngày.
                            </li>
                            <li>
                                Khăn lạnh: 02 cái/ 01 khách/ 01 ngày.
                            </li>
                            <li>
                                Nón cói du lịch: 01 cái /khách/chương trình.
                            </li>
                            <li>
                                Bảo hiểm du lịch, mức bồi thường tối đa: 20.000.000 vnđ/ khách/ vụ.
                            </li>
                        </ul>
                        <p className={cx("exclusion")}><strong>Giá tour trẻ em:</strong>
                            <li>Trẻ em từ 1,3m trở lên: giá tour như người lớn.</li>
                            <li>Trẻ em từ 1,1m đến 1,3m: 50% giá tour người lớn.</li>
                            <li>Trẻ em dưới 1,1m: Miễn phí.</li>
                        </p>
                    </div>

                    <div className={cx("share-button", "--flexbox")}>
                        <div className={cx("share-button__items", "facebook", "--cursor-pointer", "--flexbox flexbox--center")}>
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </div>
                        <div className={cx("share-button__items", "twitter", "--cursor-pointer", "--flexbox flexbox--center")}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className={cx("share-button__items", "instagram", "--cursor-pointer", "--flexbox flexbox--center")}>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className={cx("share-button__items", "pinterest", "--cursor-pointer", "--flexbox flexbox--center")}>
                            <FontAwesomeIcon icon={faPinterest}/>
                        </div>
                    </div>
                </div>
                <div className={cx("layout-container__right")}>
                    <div className={cx("decoration-price")}>
                        <div className={cx("decoration-price__value", "--flexbox", "flexbox--center")}>
                            <i
                                style={{ width: "2.5rem", justifyContent: "center" }}
                                className={cx("td-price-tag")}
                            ></i>
                            <p>{formatter.format(tour.price)}</p>
                        </div>
                        <div className={cx("decoration-price__label")}>One tour per person</div>
                    </div>
                    <FormSearch
                        price={tour.price}
                        tourID={tour.id}
                        setMessage={setMessage}
                        message={message}
                    />
                </div>
            </div>
        </>
    );
}

export default ReviewTour;