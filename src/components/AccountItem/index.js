import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://yt3.googleusercontent.com/ytc/APkrFKZUNR_WgmGXdKUSRnf1F2-ZRRr73ECEWHySCGDglA=s900-c-k-c0x00ffffff-no-rj"
                alt="tructiepgame"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trực tiếp game</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
            </div>
        </div>
    );
}

export default AccountItem;
