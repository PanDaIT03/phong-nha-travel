import classNames from "classnames/bind";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./button.svg";

import style from "~/Component/BackToTop/BackToTop.nodule.scss";
const cx = classNames.bind(style);

function BackToTop({ styles, classNames }) {
    const initialStyle = {
        fontSize: "1.8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%"
    };
    const style = { ...initialStyle, ...styles };
    const classes = cx("wrapper", {
        [classNames]: classNames
    });

    return (
        <span className={classes}>
            <ScrollToTop
                smooth
                component={<MySVG />}
                style={style}
            />
        </span>
    );
}

export default BackToTop;