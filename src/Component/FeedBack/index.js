import classNames from "classnames/bind";

import style from "./FeedBack.module.scss";
const cx = classNames.bind(style);

function FeedBack({ title, children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title', '--border-bottom')}>
                {title}
            </div>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default FeedBack;