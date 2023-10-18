import * as Yup from "yup";
import { useFormik } from "formik";
import classNames from "classnames/bind";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { formatter } from "~/constants/constants";
import * as getServices from "~/apiServices/getServices";
import * as postServices from "~/apiServices/postServices";
import style from "~/Component/PageStyle/CheckOutPageStyle/CheckOutPageStyle.module.scss";

const cx = classNames.bind(style);

function CheckOutPage() {
    const commentMessage =
        "Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.";
    const [tours, setTours] = useState([]);
    const [message, setMessage] = useState(commentMessage);
    const [stateRadio, setRadio] = useState(true);
    const [checkCoupon, setCheckCoupon] = useState(false);
    const [coupon, setCoupon] = useState('');
    const [existCoupon, setExistCoupon] = useState({});
    const [data, setData] = useState({});

    const checkboxShip = useRef();
    const accordionShip = useRef();
    const paymentMethodsBacsRadio = useRef();
    const paymentBoxBacs = useRef();
    const paymentMethodsCodRadio = useRef();
    const paymentBoxCod = useRef();
    const checkBoxCoupon = useRef();

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await getServices.getTourBooked('ControllerTour.php', {
                    name: "booked",
                    data: "checkout"
                });
                setTours(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, []);

    const accordionEvent = () => {
        if (checkboxShip.current.checked)
            accordionShip.current.classList.add(cx("active"));
        else
            accordionShip.current.classList.remove(cx("active"));
    };

    const handleFocusIn = () => {
        var empty = "";
        setMessage(empty);
    };

    const handleFocusOut = () => {
        setMessage(commentMessage);
    };

    useEffect(() => {
        if (stateRadio === true) {
            paymentBoxBacs.current.setAttribute("style", "padding: 1rem; height: 4.2rem; overflow: initial");
            paymentBoxCod.current.setAttribute("style", "padding: 0 1rem; overflow: hidden");

        }
        else {
            paymentBoxCod.current.setAttribute("style", "padding: 1rem; height: 4.2rem; overflow: initial");
            paymentBoxBacs.current.setAttribute("style", "padding: 0 1rem; overflow: hidden");
        }
    }, [stateRadio]);

    useEffect(() => {
        if (checkCoupon === true)
            checkBoxCoupon.current.setAttribute("style", "height: 14.1rem; padding: 4rem 5rem;");
        else
            checkBoxCoupon.current.setAttribute("style", "");
    }, [checkCoupon]);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            businessName: "",
            apartmentName: "",
            region: "",
            adress: "",
            postOfficeCode: "",
            province: "",
            tel: "",
            email: "",
            note: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("*").min(3, "3"),
            lastName: Yup.string().required("*").min(3, "3"),
            businessName: Yup.string().required("*"),
            apartmentName: Yup.string().required("*"),
            region: Yup.string().required("*"),
            adress: Yup.string().required("*"),
            postOfficeCode: Yup.string().required("*"),
            province: Yup.string().required("*"),
            tel: Yup.string().required("*").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Phone not valid"),
            email: Yup.string().required("*").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email not valid"),
        }),
        onSubmit: (values) => {
            const cartID = tours.map(tour => {
                return tour.cartID;
            })

            setData({
                ...values,
                paymentMethodID: paymentMethodsBacsRadio.current.checked ? 0 : 1,
                cart: cartID
            });
        }
    });

    useEffect(() => {
        postServices.insertCheckout('ControllerTour.php', {
            name: "checkout",
            data: data
        })
            .then(function (response) { });
    }, [data]);

    console.log(data);

    const handleCoupon = () => {
        //     const checkExistCoupon = async () => {
        //         try {
        //             const response = await getServices.checkExistCoupon("ControllerTour.php", {
        //                 q: "checkExistCoupon",
        //                 data: coupon
        //             });
        //             setExistCoupon(...response);
        //             setVisible(true);

        //             return response;
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        //     checkExistCoupon();
    };

    const total = tours.reduce(function (total, currentValue) {
        return total + currentValue.price * currentValue.quantity;
    }, 0);

    return (
        <>
            <div className={cx("coupon")}>
                <div className={cx("show-coupon-toggle")}>
                    <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#47a0ff" }} />
                    <span style={{ margin: "0 .5rem" }}>Bạn có mã ưu đãi?</span>
                    <a className={cx("show-coupon")} onClick={() => setCheckCoupon(!checkCoupon)}> Ấn vào đây để nhập mã</a>
                </div>

                <div className={cx("checkbox-coupon")} ref={checkBoxCoupon}>
                    <label htmlFor="coupon">Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.<br /></label>
                    <input id="coupon" placeholder="Mã ưu đãi" onChange={(e) => setCoupon(e.target.value)}></input>
                    <button onClick={handleCoupon}>Áp dụng</button>
                </div>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className={cx("checkout-box", "--flexbox", "flex-spaceBetween")}>
                    <div className={cx("checkout-box__left")}>
                        <h3 className={cx("title")}>Thông tin thanh toán</h3>

                        <div className={cx("payment-info")}>
                            <div className={cx("fullname", "--flexbox", "flex-spaceBetween")}>
                                <div className={cx("form-row")}>
                                    <label htmlFor="firstName">Họ</label>
                                    <input id="firstName" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} />
                                    {formik.errors.firstName && (
                                        <p className={cx("error-message")}>{formik.errors.firstName}</p>
                                    )}
                                </div>
                                <div className={cx("form-row")}>
                                    <label htmlFor="lastName">Tên</label>
                                    <input id="lastName" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} />
                                    {formik.errors.lastName && (
                                        <p className={cx("error-message")}>{formik.errors.lastName}</p>
                                    )}
                                </div>
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="businessName">Tên công ty</label>
                                <input id="businessName" name="businessName" value={formik.values.businessName} onChange={formik.handleChange} />
                                {formik.errors.businessName && (
                                    <p className={cx("error-message")}>{formik.errors.businessName}</p>
                                )}
                                <input id="apartmentName" name="apartmentName" value={formik.values.apartmentName} onChange={formik.handleChange}
                                    style={{ marginTop: "20px" }}
                                />
                                {formik.errors.apartmentName && (
                                    <p className={cx("error-message")}>{formik.errors.apartmentName}</p>
                                )}
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="region">Quốc gia/Khu vực</label>
                                <input id="region" name="region" value={formik.values.region} onChange={formik.handleChange} />
                                {formik.errors.region && (
                                    <p className={cx("error-message")}>{formik.errors.region}</p>
                                )}
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="adress">Địa chỉ</label>
                                <input id="adress" name="adress" placeholder="Địa chỉ" value={formik.values.adress} onChange={formik.handleChange} />
                                {formik.errors.adress && (
                                    <p className={cx("error-message")}>{formik.errors.adress}</p>
                                )}
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="postOfficeCode">Mã bưu điện</label>
                                <input id="postOfficeCode" name="postOfficeCode" value={formik.values.postOfficeCode} onChange={formik.handleChange} />
                                {formik.errors.postOfficeCode && (
                                    <p className={cx("error-message")}>{formik.errors.postOfficeCode}</p>
                                )}
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="province">Tỉnh thành phố</label>
                                <input id="province" name="province" value={formik.values.province} onChange={formik.handleChange} />
                                {formik.errors.province && (
                                    <p className={cx("error-message")}>{formik.errors.province}</p>
                                )}
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="tel">Số điện thoại</label>
                                <input id="tel" name="tel" value={formik.values.tel} onChange={formik.handleChange} />
                                {formik.errors.tel && (
                                    <p className={cx("error-message")}>{formik.errors.tel}</p>
                                )}
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                                {formik.errors.email && (
                                    <p className={cx("error-message")}>{formik.errors.email}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={cx("checkout-box__right")}>
                        <div className={cx("ship-to-difference", "--flexbox")}>
                            <input ref={checkboxShip} onClick={accordionEvent} id="ship-to-difference__checkbox" className={cx("ship-to-difference__checkbox", "--cursor-pointer")} type="checkbox" />
                            <label htmlFor="ship-to-difference__checkbox" className={cx("--cursor-pointer")}>
                                <h3>Giao hàng tới địa chỉ khác?</h3>
                            </label>
                        </div>

                        <div className={cx("ship-to-another", "hidden")} ref={accordionShip}>
                            <div className={cx("fullname", "--flexbox", "flex-spaceBetween")}>
                                <div className={cx("form-row")}>
                                    <label htmlFor="ship-name">Họ</label>
                                    <input id="ship-name" />
                                </div>
                                <div className={cx("form-row")}>
                                    <label htmlFor="ship-surname">Tên</label>
                                    <input id="ship-surname" />
                                </div>
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="ship-company">Tên công ty</label>
                                <input id="ship-company" />
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="ship-country-region">Quốc gia/Khu vực</label>
                                <input id="ship-country-region" value="Việt Nam" readOnly={true} />
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="ship-address">Địa chỉ</label>
                                <input id="ship-address" placeholder="Địa chỉ" />
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="ship-post-office-code">Mã bưu điện</label>
                                <input id="ship-post-office-code" />
                            </div>
                            <div className={cx("form-row")}>
                                <label htmlFor="ship-province">Tỉnh thành phố</label>
                                <input id="ship-province" />
                            </div>
                        </div>
                        <div className={cx("form-row")}>
                            <label htmlFor="note">Ghi chú đơn hàng</label>
                            <textarea id="note" className={cx("note")} name="note" value={formik.values.note} onChange={formik.handleChange} onFocus={handleFocusIn} onBlur={handleFocusOut} placeholder={message}></textarea>
                        </div>
                    </div>
                </div>

                <div className={cx("product-box")}>
                    <h3 className={cx("title")}>Your order</h3>
                    <table border={1}>
                        <tbody>
                            <tr>
                                <th className={cx("product-name")}>Product</th>
                                <th className={cx("product-total")}>Subtotal</th>
                            </tr>
                            {
                                tours.map((tour) => (
                                    <tr className={cx("cart-item")} key={tour.cartID}>
                                        <td className={cx("product")}>
                                            <span className={cx("product-name")}>{tour.name}</span>
                                            <span className={cx("product-quantity")}> x {tour.quantity}</span>
                                            <p>Booking Date: {tour.bookeDate}</p>
                                        </td>
                                        <td className={cx("product-subtotal")} style={{ fontWeight: "normal" }}>{formatter.format(tour.price * tour.quantity)}</td>
                                    </tr>
                                ))
                            }
                            <tr className={cx("cart-total")}>
                                <th>Total</th>
                                <td>{formatter.format(total)}</td>
                            </tr >
                            <tr className={cx("ship")}>
                                <th>Giao hàng</th>
                                <td>Giao hàng miễn phí</td>
                            </tr>
                            <tr className={cx("order-total")}>
                                <th>Total</th>
                                <td>{formatter.format(total)}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={cx("payment")}>
                        <ul className={cx("payment__methods")}>
                            <li className={cx("payment__methods__bacs")}>
                                <input className="--cursor-pointer" name="paymentMethod" id="payment__methods__bacs" type="radio" defaultChecked="checked" ref={paymentMethodsBacsRadio} onChange={() => setRadio(!stateRadio)} />
                                <label style={{ userSelect: "none" }} className="--cursor-pointer" htmlFor="payment__methods__bacs">Chuyển khoản ngân hàng</label>
                                <div className={cx("payment-box-bacs")} ref={paymentBoxBacs}>
                                    <p>Sau khi nhận được booking. Phong Nha Travel sẽ liên hệ với khách hàng để thực hiện xác nhận và đặt cọc tour.</p>
                                </div>
                            </li>
                            <li className={cx("payment__methods__cod")}>
                                <input className="--cursor-pointer" name="paymentMethod" id="payment__methods__cod" type="radio" ref={paymentMethodsCodRadio} onChange={() => setRadio(!stateRadio)} />
                                <label style={{ userSelect: "none" }} className="--cursor-pointer" htmlFor="payment__methods__cod">Tiền mặt tại văn phòng</label>
                                <div className={cx("payment-box-cod")} ref={paymentBoxCod}>
                                    <p>Sau khi nhận được booking. Phong Nha Travel sẽ liên hệ với khách hàng để thực hiện xác nhận và đặt cọc tour.</p>
                                </div>
                            </li>
                        </ul>
                        <div className={cx("place-order")}>
                            <p>Phong Nha Travel cam kết bảo mật thông tin khách hàng, thông tin bạn cung cấp sẽ được Phong Nha Travel sử dụng để xử lý đơn đặt Tour. Vui lòng xem chính sách riêng tư.</p>
                            <div className={cx("btn-order")}>
                                <button type="submit" className={cx("--flexbox", "flexbox--center")}>
                                    <span>Đặt hàng</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CheckOutPage;