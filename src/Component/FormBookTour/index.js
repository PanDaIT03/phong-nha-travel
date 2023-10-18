import classNames from 'classnames/bind';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from 'react';

import { formatter } from '~/constants/constants';
import * as postServices from "~/apiServices/postServices";
import style from './FormBookTour.module.scss';
const cx = classNames.bind(style);

function FormSearch(props) {
    const { tourID, price } = props;
    const [data, setData] = useState({});

    let newDate = new Date();
    let bookeDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` :
        `${newDate.getMonth() + 1}`}-${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}`;

    const formik = useFormik({
        initialValues: {
            name: "",
            tel: "",
            email: "",
            date: bookeDate,
            quantity: 1
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Vui lòng điền thông tin").min(3, "Tên phải từ 3 ký tự trở lên"),
            tel: Yup.string().required("Vui lòng điền thông tin").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Số điện thoại không chính xác"),
            email: Yup.string().required("Vui lòng điền thông tin").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không chính xác"),
            date: Yup.string().required("Vui lòng điền thông tin").matches(/^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[13578]|1[02])\1(?:31))|(?:(\/|-|\.)(?:0?[13-9]|1[0-2])\2(?:29|30)))$|^(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)0?2\3(?:29)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:0?[1-9]|1\d|2[0-8])$/, "Ngày không chính xác"),
            quantity: Yup.string().required("Vui lòng điền thông tin").matches(/^(0?[1-9]|[1-9][0-9])$/, "Số lượng từ 1-100"),
        }),
        onSubmit: (values) => {
            setData({
                ...values,
                id: tourID
            });
        }
    });

    useEffect(() => {
        const bookeTour = async () => {
            try {
                const response = await postServices.insertCart("ControllerTour.php", {
                    name: "cart",
                    data: data
                });
                
                return response;
            } catch (error) {
                console.log(error);
            }
        };
        bookeTour();
    }, [data]);

    return (
        <div className={cx('icons-set__item-right')}>
            <div className={cx('form-block')}>
                <div className={cx('form-block__title')}>Book the tour</div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={cx('form-block__item')}>
                        <input
                            type='text'
                            name="name"
                            placeholder='Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <i className={cx('td-user')}></i>
                        {formik.errors.name && (
                            <div className={cx("error")}>
                                <div className={cx("error-message")}>
                                    <p>{formik.errors.name}</p>
                                    <span className={cx("arrow")}></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('form-block__item')}>
                        <input
                            type='text'
                            name="email"
                            placeholder='Email address'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <i className={cx('td-email')}></i>
                        {formik.errors.email && (
                            <div className={cx("error")}>
                                <div className={cx("error-message")}>
                                    <p>{formik.errors.email}</p>
                                    <span className={cx("arrow")}></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('form-block__item')}>
                        <input
                            type='text'
                            name="tel"
                            placeholder='Phone number'
                            value={formik.values.tel}
                            onChange={formik.handleChange}
                        />
                        <i className={cx('td-phone')}></i>
                        {formik.errors.tel && (
                            <div className={cx("error")}>
                                <div className={cx("error-message")}>
                                    <p>{formik.errors.tel}</p>
                                    <span className={cx("arrow")}></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('form-block__item')}>
                        <input
                            type="date"
                            name="date"
                            placeholder='Date'
                            value={formik.values.date}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.date && (
                            <div className={cx("error")}>
                                <div className={cx("error-message")}>
                                    <p>{formik.errors.date}</p>
                                    <span className={cx("arrow")}></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('form-block__item')}>
                        <input
                            min={1}
                            max={99}
                            type="number"
                            name="quantity"
                            placeholder='Quantity'
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                        />
                        <i className={cx('td-quantity')}></i>
                        {formik.errors.quantity && (
                            <div className={cx("error")}>
                                <div className={cx("error-message")}>
                                    <p>{formik.errors.quantity}</p>
                                    <span className={cx("arrow")}></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('form-block__price-details')}>
                        {
                            formik.values.quantity
                            && `${formatter.format(price)} x ${formik.values.quantity} 
                                = ${formatter.format(price * formik.values.quantity)}`
                        }
                    </div>
                    <div className={cx('form-block__button')}>
                        <input type="submit" value="Book now" className={cx('--cursor-pointer')}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormSearch;