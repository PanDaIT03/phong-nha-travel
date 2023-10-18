import classNames from "classnames/bind";

import { chooseDifference } from "~/constants/constants";
import FormSearch from "~/Component/FormSearch";

import style from './ChooseDifference.module.scss';
const cx = classNames.bind(style);

function ChooseDifference(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("wrapper__content")}>
                <div className={cx('content__left')}>
                    <div className={cx("title")}>
                        <div className={cx('title__subtitle')}>chọn sự khác biệt</div>
                        <div className={cx('title__primary')}>
                            <h3>chọn phong nha travel</h3>
                        </div>
                    </div>
                    <div className={cx("choose-items")}>
                        {chooseDifference.map(item => (
                            <div className={cx('item')} key={item.id}>
                                <div className={cx('icon')}>
                                    <div className={cx('icon__item', `${item.icon}`)}></div>
                                </div>
                                <div className={cx('icon__field')}>
                                    <div className={cx('icon__field-title')}><h3>{item.title}</h3></div>
                                    <div className={cx('icon__field-description')}>{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('content__right')}>
                    <FormSearch />
                </div>
            </div>
        </div>
    );
}

export default ChooseDifference;