import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import Button from "../Button";
import Menu from "../Popper/Menu";
import { formatter } from "~/constants/constants";
import { today } from "~/constants/constants";
import { CATEGORY_ITEMS } from "~/constants/constants";
import { searchTour } from "~/actions/search";

import style from "./FormSearch.module.scss";
const cx = classNames.bind(style);

function FormSearch() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false),
        [from, setFrom] = useState(0),
        [to, setTo] = useState(0);

    const progress = useRef(),
        rangeInput = useRef(),
        rangeMin = useRef(),
        rangeMax = useRef(),
        menuCategory = useRef();

    const initialValues = {
        priceMin: 0,
        priceMax: 4850000,
        priceGap: 1000000,
        now: today()
    };
    const { priceMin, priceMax, priceGap, now } = initialValues;

    const formik = useFormik({
        initialValues: {
            tourName: "",
            minDate: "",
            maxDate: "",
            minPrice: 0,
            maxPrice: priceGap,
            category: ""
        },
        onSubmit: (values) => {
            handleClickFind(values);
        }
    });
    const { category } = formik.values;

    const handleClickFind = (values) => {
        const newData = { ...values };
        const action = searchTour(newData);

        dispatch(action);
        navigate(`/tour-category`);
    };

    //Price range
    useEffect(() => {
        let listInput = Array.from(rangeInput.current.childNodes);

        if (listInput.length === 0) {
            return;
        } else {
            listInput.map(input => (
                input.addEventListener("input", e => {
                    let minVal = parseInt(rangeMin.current.value),
                        maxVal = parseInt(rangeMax.current.value);
                    let left = (minVal / priceMax) * 100,
                        right = 100 - (maxVal / priceMax) * 100;

                    if (maxVal - minVal < priceGap) {
                        if (e.target.className === rangeMin.current.classList.value) {
                            rangeMin.current.value = maxVal - priceGap;
                        } else {
                            rangeMax.current.value = minVal + priceGap;
                        }
                    } else {
                        setFrom(minVal);
                        setTo(maxVal);
                        progress.current.setAttribute("style", `left: ${left}%; right: ${right}%;`);
                    }
                })
            ));
        }
    }, []);

    useEffect(() => {
        open
            ? menuCategory.current.classList.add(cx("active"))
            : menuCategory.current.classList.remove(cx("active"));
    }, [open]);

    //Add event mouse down for all
    useEffect(() => {
        let handler = (e) => {
            if (!menuCategory.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    const handleCategory = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "minPrice" || name === "maxPrice") {
            value = +value;
        }

        formik.setValues({ ...formik.values, [name]: value });
    };

    const handleOption = (item) => {
        const result = item.target.text;

        formik.setFieldValue("category", result);
        setOpen(false);
    };

    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("title")}>Search Tour</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={cx("form-block")}>
                    <div className={cx("form-block__item")}>
                        <input
                            type='text'
                            name="tourName"
                            placeholder='Search Tour'
                            onChange={(e) => handleChange(e)}
                        />
                        <i className={cx('icon', 'search')}></i>
                    </div>
                    <div className={cx("form-block__item")}>
                        <div className={cx("form-block__item__field-pair")}>
                            <div className={cx("start")}>
                                <input
                                    type="date"
                                    name="minDate"
                                    placeholder='Date'
                                    min={now}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className={cx("end")}>
                                <input
                                    type='date'
                                    name="maxDate"
                                    placeholder='End'
                                    min={now}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("form-block__item")}>
                        <div className={cx("form-block__item__field-pair")}>
                            <div className={cx("field")}>
                                <div className={cx("slider")}>
                                    <div className={cx("progress")} ref={progress}></div>
                                    <div className={cx("range-input")} ref={rangeInput}>
                                        <input
                                            type="range"
                                            className={cx("range-min")}
                                            min={priceMin}
                                            max={priceMax}
                                            ref={rangeMin}
                                            name="minPrice"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <input
                                            type="range"
                                            className={cx("range-max")}
                                            min={priceMin}
                                            max={priceMax}
                                            ref={rangeMax}
                                            name="maxPrice"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className={cx("price-label")}>
                                    <div
                                        className={cx("from")}
                                        name="from"
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {formatter.format(from)}
                                    </div>
                                    <div className={cx("separator")}>-</div>
                                    <div
                                        className={cx("to")}
                                        name="to"
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {formatter.format(to)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("form-block__item")}>
                        <button
                            className={cx("dropdown-toggle")}
                            onClick={(e) => handleCategory(e)}
                        >
                            <span className={cx(category ? "has-content" : "")}>
                                {category ? category : "Category"}
                            </span>
                            <i className={cx('icon', 'category')}></i>
                        </button>
                        <ul className={cx('menu')} ref={menuCategory}>
                            <Menu
                                items={CATEGORY_ITEMS}
                                name="category"
                                type="Form"
                                className={cx("menu-category")}
                                onClick={handleOption}
                            />
                        </ul>
                    </div>
                    <div className={cx("form-block__item", "button")}>
                        <Button find buttonType="submit">
                            Find Tours
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormSearch;