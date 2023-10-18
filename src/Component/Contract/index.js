import classNames from 'classnames/bind';
import style from './Contract.module.scss';

const cx = classNames.bind(style);

function Contract(props) {
    const { icon, imgCircle, circleFill, bar, link } = props;

    return (
        <>
            <div className={cx('icon-vr')}>
                <div className={cx('icon')}>
                    <div className={cx('icon-vr-circle-fill-large')}
                        style={{ backgroundColor: `${circleFill}` }}>
                    </div>
                    <div className={cx('icon-vr-circle-fill')}
                        style={{ backgroundColor: `${circleFill}` }}>
                    </div>
                    <a className={cx('icon-vr-img-circle', '--flexbox', 'flexbox--center')}
                        style={{ backgroundColor: `${imgCircle}` }}
                        href={link}
                        target='_blank'
                    >
                        <img src={icon} alt="icon" />
                    </a>
                    {
                        bar != "" &&
                        <div className={cx('icon-bar', '--flexbox', 'flexbox--center', '--cursor-pointer')}
                            style={{ backgroundColor: `${imgCircle}` }}
                        >
                            {bar}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Contract;