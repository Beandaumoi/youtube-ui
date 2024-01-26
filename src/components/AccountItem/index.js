import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ image, name, nickname, tick }) {
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/@${name}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={image} alt={nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{name}</span>
                    {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
            </div>
        </Link>
    );
}

export default AccountItem;
