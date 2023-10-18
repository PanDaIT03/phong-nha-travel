import React from "react";
import { useEffect, useRef, useContext, useState } from "react";
import classNames from "classnames/bind";

import styles from "./FinishPurchaseStyle.module.scss";
import * as getServices from "~/apiServices/getServices";
import Context from "../Context/context";

const cx = classNames.bind(styles);

function FinishPurchase({ ID }) {
    const [tour, setTour] = useState([]);

    const purchaseContainer = useRef();

    const context = useContext(Context);
    const { visible, setVisible, setPaymentStatus, totalInfo } = context;

    useEffect(() => {
        if (visible == true) {
            purchaseContainer.current.setAttribute("style", "display: block");
        }
        else {
            purchaseContainer.current.setAttribute("style", "display: none");
        }

        const fetchAPI = async () => {
            try {
                const response = await getServices.getBookeDetailByID("ControllerTour.php", {
                    data: ID,
                    name: "bookeDetail"
                });
                setTour(response);
            } catch (error) {
                console.log(error);
            }
        };
        ID != 0 && fetchAPI();
    }, [visible]);

    const handleClick = () => {
        setVisible(false);
    }

    const handleSubmit = () => {
        setPaymentStatus(1);
        setVisible(false);
    }

    const handleChange = () => { }

    return (
        <div className={cx("purchase-container")} ref={purchaseContainer}>
            <div className={cx("purchase-container__content")}>
                {tour.map((item, index) => (
                    <div key={index}>
                        <div className={cx("close-button")}>
                            <i id={cx("close")} className={cx("fa-sharp", "fa-solid", "fa-xmark")} onClick={handleClick}></i>
                        </div>
                        <div className={cx("title")}>
                            <h3>Xác Nhận Thanh Toán</h3>
                        </div>
                        <div className={cx("product")}>
                            <div className={cx("product__left")}>
                                <img src={item.image} />
                            </div>
                            <div className={cx("product__right")}>
                                <div className={cx("product__right__top")}>
                                    <div className={cx("top-title")}><h4>{item.name}</h4></div>
                                    <div className={cx("quantity")}>Số lượng: {item.quantity}</div>
                                </div>
                                <div className={cx("product__right__pice")}>{totalInfo.total}</div>
                                <div className={cx("product__right__name")}>
                                    <ul style={{
                                        height: "10rem",
                                        overflow: "hidden"
                                    }}>
                                        <li>{item.title}.</li>
                                        <li>{item.description}.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={cx("payment-method")}>
                    Payment Method
                    <div className={cx("payment-items")}>
                        <label htmlFor={cx("choose-purchase-type-1")}>
                            <div className={cx("item")}>
                                <i id={cx("credit-card")} className={cx("fa-solid fa-credit-card")}></i>
                                <div className={cx("credit")}>Credit Card</div>
                                <div className={cx("purchase-checkbox")}>
                                    <input className={cx("choose-purchase-type")} id={cx("choose-purchase-type-1")} name="check-pay-purchase" type="radio" />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="choose-purchase-type-2">
                            <div className={cx("item")}>
                                <i id={cx("paypal")} className={cx("fa-brands fa-paypal")}></i>
                                <div className={cx("paypal")}>Paypal</div>
                                <div className={cx("purchase-checkbox")}>
                                    <input className={cx("choose-purchase-type")} id={cx("choose-purchase-type-2")} name="check-pay-purchase" type="radio" />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="choose-purchase-type-3">
                            <div className={cx("item")}>
                                <i id={cx("wallet")} className={cx("fa-solid fa-wallet")}></i>
                                <div className={cx("wallet")}>Wallet</div>
                                <div className={cx("purchase-checkbox")}>
                                    <input className={cx("choose-purchase-type")} id={cx("choose-purchase-type-3")} name="check-pay-purchase" type="radio" />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="choose-purchase-type-4">
                            <div className={cx("item")}>
                                <i id={cx("visa")} className={cx("fa-brands", "fa-cc-visa")}></i>
                                <div className={cx("sign")}>Visa</div>
                                <div className={cx("purchase-checkbox")}>
                                    <input className={cx("choose-purchase-type")} id={cx("choose-purchase-type-4")} name="check-pay-purchase" type="radio" />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className={cx("purchase-info")}>
                    <div className={cx("right")}>
                        <div className={cx("personal-info")}>
                            <div className={cx("personal-info__title")}>
                                <i className={cx("fa-regular fa-user")}></i>
                                Personal Info
                            </div>
                            <div className={cx("card-number")}>
                                <label htmlFor="card">Credit Card Number:</label> <br />
                                <input id={cx("card")} type="text" value="1535 7654 3246" onChange={handleChange} />
                            </div>
                        </div>
                        <input className={cx("submit-button")} type="submit" value="Xác nhận" onClick={handleSubmit} />
                    </div>
                    <div className={cx("left")}>
                        <div className={cx("ship-info")}>
                            <i className={cx("fa-solid", "fa-truck-fast")}></i>
                            <label htmlFor="ship-details">Ship Infomation</label>
                            <input id={cx("ship-details")} type="text-area" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinishPurchase;