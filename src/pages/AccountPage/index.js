import * as Yup from "yup";
import { useFormik } from "formik";
import classNames from "classnames/bind";

import Button from "~/Component/Button";
import images from "~/asset/images";
import Input from "~/Component/Input";

import styles from "~/sass/Account.module.scss";
const cx = classNames.bind(styles);

const initialValues = {
    userName: "",
    email: "",
    numberPhone: ""
};

function AccountPage() {
    const { values, errors, touched, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            userName: Yup.string().required("fill your name").min(5, "The name must be longer than 5 characters"),
            email: Yup.string().required("fill your email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email not valid"),
            numberPhone: Yup.string().required("fill your number phone").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, "Phone not valid"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("profile-pic")}>
                    <div className={cx("header")}>
                        <h2 className={cx("title")}>Profile Picture</h2>
                    </div>
                    <div className={cx("content-avatar")}>
                        <img className={cx("avatar")} src={images.userAvatar} alt="avatar"/>
                        <div className={cx("description")}>JPG or PNG no larger than 5 MB</div>
                        <Button primary>
                            Upload new image
                        </Button>
                    </div>
                </div>
                <div className={cx("account-details")}>
                    <div className={cx("header")}>
                        <h2 className={cx("title")}>Account Details</h2>
                    </div>
                    <form className={cx("user-info")} onSubmit={handleSubmit}>
                        <Input
                            extraLarge
                            name="userName"
                            error={errors.userName}
                            touched={touched.userName}
                            value={values.userName}
                            placeHolder="Duong"
                            fieldName="User name"
                            onChange={handleChange}
                        />
                        <Input
                            extraLarge
                            name="email"
                            error={errors.email}
                            touched={touched.email}
                            value={values.email}
                            placeHolder="abcxyz@gmail.com"
                            fieldName="Email"
                            onChange={handleChange}
                        />
                        <Input
                            extraLarge
                            name="numberPhone"
                            error={errors.numberPhone}
                            touched={touched.numberPhone}
                            value={values.numberPhone}
                            placeHolder="1234567890"
                            fieldName="Number phone"
                            onChange={handleChange}
                        />
                        <Button className={cx("save")} primary buttonType="submit">Save changes</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;