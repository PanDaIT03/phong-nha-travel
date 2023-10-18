import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/asset/images';
import Menu from '~/Component/Popper/Menu';
import { MENU_ITEMS } from "~/constants/constants";
import style from '~/Layout/component/Header/Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('navbar__left')}>
                    <a href="/">
                        <img src={images.logo} alt="" className={cx('logo')} />
                    </a>
                </div>
                <div className={cx('navbar__right')}>
                    <ul className={cx('menu')}>
                        <Menu items={MENU_ITEMS} />
                    </ul>
                </div>
            </div >
        </header >
    )
}

export default Header;