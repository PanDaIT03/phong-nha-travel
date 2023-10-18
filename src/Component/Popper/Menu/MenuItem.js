import classNames from "classnames/bind";

import style from "./Menu.module.scss"
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(style);

function MenuItem({ data, type, className, onClick, ...passProps }) {
    const props = {
        onClick,
        ...passProps
    };

    const [open, setOpen] = useState(false);
    const listMenu = useRef();

    const { onClickOption, onClickSelected } = props;
    const { id, title, to, icon, children } = data;
    //"!!": Convert to boolean
    const isParent = !!children;

    const handleRenderItem = () => {
        return (
            <>
                <a href={to}>{title}</a>
                {isParent
                    && <ul className={cx("menu-poper")}>
                        {children.data.map((item, index) => (
                            <li key={index} className={cx("item")} >
                                <a href={item.to}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                }
            </>
        );
    };

    useEffect(() => {
        if (isParent) {
            open
                ? listMenu.current.classList.add(cx("active"))
                : listMenu.current.classList.remove(cx("active"));
        } else {
            return;
        }
    }, [open]);

    const handleClick = (e, id) => {
        if(type === "Form") {
            onClickSelected(id);
            onClickOption(e);
        } else {
            return;
        }
    };

    return (
        <li className={cx("menu-item",
            `${icon ? icon : ''}` || `${isParent ? 'has-children' : ''}`,
            className
        )}
            ref={listMenu}
            name="category"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={(e) => handleClick(e, id)}
        >
            {handleRenderItem()}
        </li>
    );
};

export default MenuItem;