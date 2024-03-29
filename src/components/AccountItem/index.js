import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
