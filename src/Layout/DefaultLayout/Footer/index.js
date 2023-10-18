import classNames from 'classnames/bind';
import BackToTop from '~/Component/BackToTop';

import styles from '~/Layout/DefaultLayout/Footer/Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    const styleHrTag = {
        color: "#333",
        width: "100%"
    };

    return (
        <div className={cx('footer')}>
            <div className={cx('footer__top')}>
                <hr style={styleHrTag} />
                <div className={cx('backtotop-btn')}>
                    <div className={cx('btn-arrow')}>
                        <BackToTop
                            styles={{
                                position: "initial",
                                boxShadow: "none"
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('footer__bottom')}>
                <div className={cx('footer__bottom__right')}>© 2021 Bản quyền thuộc về Phong Nha Travel | Developed by DOKE.</div>
                <div className={cx('footer__bottom__left')}>
                    <div className={cx('item')}>Terms & Conditions</div>
                    <div className={cx('item')}>Privacy Policy</div>
                    <div className={cx('item')}>Contact</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;