import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./Button.module.scss";
const cx = classNames.bind(style);

function Button({
    to,
    href,
    primary = false,
    apply = false,
    update = false,
    checkout = false,
    find = false,
    disabled = false,
    type = "medium",
    leftIcon,
    rightIcon,
    children,
    className,
    buttonType = "button",
    onClick,
    ...passProps
}) {
    let Comp = "button";
    const props = {
        onClick,
        type: buttonType,
        ...passProps
    };

    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx("wrapper", {
        [className]:  className,
        primary,
        apply,
        update,
        checkout,
        find,
        disabled,
        type
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;