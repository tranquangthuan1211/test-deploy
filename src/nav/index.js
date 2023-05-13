import classNames from 'classnames/bind';
import styles from './nav.module.scss';

const cx = classNames.bind(styles);
function Nav() {
    return (
        <div className={cx('nav')}>
            <div className={cx('content')}>
                <img
                    src="https://vietreview.vn/wp-content/uploads/2020/06/netflix-la-gi.jpg"
                    className={cx('image_logo')}
                    alt="avatar"
                />

                <img
                    src="data:image/png;base64,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"
                    className={cx('image_acount')}
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default Nav;
