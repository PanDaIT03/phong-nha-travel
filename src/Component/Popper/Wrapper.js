import classNames from "classnames/bind";

import style from "./Popper.module.scss";
const cx = classNames.bind(style);

function Wrapper({ menu = false ,children, className, onClick, ...passProps }) {
    let Comp = "div";
    const props = {
        onClick,
        ...passProps
    };

    if (menu) {
        Comp = "ul";
    }
    
    return (
        <Comp className={cx("wrapper", className)} {...props}>
            {children}
        </Comp>
    );
}

export default Wrapper;