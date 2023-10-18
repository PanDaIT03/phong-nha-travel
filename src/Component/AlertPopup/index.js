import classNames from "classnames/bind";
import { useContext, useEffect, useRef } from "react";

import Context from "../Context/context";
import { alertPopupState } from "~/constants/constants";
import style from "./AlertPopup.module.scss";

const cx = classNames.bind(style);

function Notification(params) {
    const context = useContext(Context);
    const alert = useRef();

    const { toastify, visible, setVisible } = context;
    const { value } = params;

    useEffect(() => {
        visible === true
            ? alert.current.setAttribute("style", "display: block")
            : alert.current.setAttribute("style", "display: none");
    }, [visible]);

    const handleClick = () => {
        setVisible(false);
    };

    return (
        alertPopupState.map(item => (
            item.state === toastify
            && <div className={cx("wrapper", `--${item.style}`)} ref={alert} key={item.id}>
                <div className={cx("alert")}>
                    <div className={cx("button-top")}>
                        <button
                            className={cx("close", "--flexbox", "flexbox--center", "--cursor-pointer")}
                            onClick={handleClick}
                        >
                        </button>
                    </div>
                    <div className={cx("icon")}>
                        <div className={cx("icon-top")}>
                            <img src={item.image} />
                        </div>
                        <div className={cx("icon-decoration")}></div>
                    </div>
                    <div className={cx("title")}>
                        <span className={cx("text")}>
                            {item.title}
                        </span>
                    </div>
                    <div className={cx("content")}>
                        <p>{item.text}</p>
                        <p>{item.subText} {item.state === true && `${value}%`}</p>
                    </div>
                    <div className={cx("button-bottom")}>
                        <button
                            className={cx("continue", "--cursor-pointer")}
                            style={{ color: `${item.buttonColor}` }}
                            onClick={handleClick}
                        >Đã hiểu
                        </button>
                    </div>
                </div>
            </div>
        ))
    );
}

export default Notification;