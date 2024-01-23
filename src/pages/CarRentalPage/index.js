import classNames from "classnames/bind";

import images from "~/asset/images";
import { TABLE_RENTAL_PRICE, COMMIT_LIST } from "~/constants/constants";

import styles from "~/sass/CarRental.module.scss";
const cx = classNames.bind(styles);

function CarRentalPage() {
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("content__header")}>
                    <div className={cx("title")}>
                        <h2>BẢNG GIÁ THUÊ XE DU LỊCH TẠI QUẢNG BÌNH NĂM 2018</h2>
                    </div>
                    <div className={cx("img")}><img src={images.carRental} alt="car_rental" /></div>
                </div>
                <div className={cx("content__body")}>
                    <div className={cx("title")}>
                        <em>Kính chào quý khách!</em>
                    </div>
                    <div className={cx("info")}>
                        <p>
                            Công ty TNHH Lữ Hành
                            <strong> Phong Nha Travel </strong>
                            là đơn vị kinh doanh lữ hành uy tín chuyên phục vụ các chương trình tham quan
                            <strong> du lịch Quảng Bình </strong>
                            nói riêng và cả nước nói chung. Ngoài ra,
                            <strong> Phong Nha Travel </strong>
                            tự hào là đơn vị có nhiều  dòng xe cao cấp, đời mới lớn nhất tại Quảng Bình, từ 4 chỗ đến 45 chỗ nhằm  phục vụ nhu cầu tham quan du lịch, cưới hỏi, công tác….
                        </p>
                        <p>Chúng tôi cung cấp dịch vụ đón tiễn ga Đồng Hới, sân bay Đồng Hới. Dịch vụ thuê xe du lịch Phong Nha Kẻ Bàng. Với đội ngũ lái lái xe chuyên nghiệp là người địa phương, am hiểu các tuyến đường, cũng như các nhà hàng, các điểm mua sắm tại Quảng Bình. Sẽ hỗ trợ du khách khi đến thăm quan Quảng Bình.</p>
                        <p>
                            <strong>Phong Nha Travel </strong>
                            tự hào thương hiệu du lịch hàng đầu tại Quảng Bình
                        </p>
                        <div className={cx("img")}>
                            <img src={images.carRental2} alt="car_rental_2" style={{ margin: "1rem 0" }}/>
                            <img src={images.carRental3} alt="car_rental_3"/>
                        </div>
                    </div>
                    <div className={cx("rental-price")}>
                        <h3>Dưới đây là bảng giá thuê xe 2018</h3>
                        <p>(Đơn vị tính: VNĐ)</p>
                        <table border={1} className={cx("table-price")}>
                            <thead>
                                <th>Tuyến đường di chuyển</th>
                                <th>4 chỗ</th>
                                <th>7 chỗ</th>
                                <th>16 chỗ</th>
                                <th>29 chỗ</th>
                                <th>35 chỗ</th>
                                <th>45 chỗ</th>
                            </thead>
                            <tbody>
                                {TABLE_RENTAL_PRICE.map(item => (
                                    <tr key={item.id}>
                                        <td colSpan={!item.prices ? 8 : 1}>
                                            <strong>{item.title}</strong>
                                        </td>
                                        {item.prices
                                            && item.prices.map((price, index) => <td key={index}>{price}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={cx("content__bottom")}>
                    <div className={cx("we-commit")}>
                        <h3>Chúng tôi cam kết</h3>
                        {COMMIT_LIST.map(item => (
                            <ul key={item.id}>
                                <li>{item.title}</li>
                            </ul>
                        ))}
                    </div>
                    <div className={cx("contact")}>
                        <h3>Mọi thông tin Quý khách liên hệ</h3>
                        <strong>Công ty TNHH Lữ Hành Phong Nha Travel</strong>
                        <p>Địa chỉ: Bảo Ninh – TP. Đồng Hới – Quảng Bình</p>
                        <p>
                            <span>Hotline:</span>
                            <span className={cx("number-phone")}>0939761247</span>
                        </p>
                        <p>Email: daiphucduongvinh203@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarRentalPage;