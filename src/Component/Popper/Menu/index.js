import classNames from "classnames/bind";
import { useState } from "react";

import MenuItem from "./MenuItem";
import style from "./Menu.module.scss";
const cx = classNames.bind(style);

function Menu({
    items = [],
    type = "medium",
    className,
    onClick,
    ...passProps
}) {
    const classes = cx("list-menu", {
        [className]: className
    });
    const props = {
        onClick,
        ...passProps
    };

    const [selected, setSelected] = useState('');

    const renderItems = () => (
        items.map((item, index) => {
            return <MenuItem
                data={item}
                key={index}
                type={type}
                className={cx(selected == item.id ? "selected" : '')}
                onClickSelected={() => setSelected(item.id)}
                onClickOption={onClick}
            />
        })
    );

    return (
        <div className={classes} {...props}>
            <ul className={cx("menu-items")}>{renderItems()}</ul>
        </div>
    );
}

export default Menu;