import classNames from 'classnames/bind';
import styles from './nav.module.scss';

const cx = classNames.bind(styles);
function Nav() {
    return (
        <div className={cx('nav')}>
            <div className={cx('content')}>
                <img src="../../public/image/avatar.png" className={cx('image_logo')} alt="avatar" />

                <img src="../../public/image/logo.png" className={cx('image_acount')} alt="logo" />
            </div>
        </div>
    );
}

export default Nav;
