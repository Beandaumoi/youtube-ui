import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return data.lineTop === true ? (
        <div>
            <div className={cx('lineTop')}></div>
            <Button className={cx('menu-item')} outline leftIcon={data.icon} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    ) : data.lineBottom === true ? (
        <div>
            <Button className={cx('menu-item')} outline leftIcon={data.icon} onClick={onClick}>
                {data.title}
            </Button>
            <div className={cx('lineTop')}></div>
        </div>
    ) : data.line === true ? (
        <div>
            <div className={cx('lineTop')}></div>
            <Button className={cx('menu-item')} outline leftIcon={data.icon} onClick={onClick}>
                {data.title}
            </Button>
            <div className={cx('lineTop')}></div>
        </div>
    ) : (
        <Button className={cx('menu-item')} outline leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
