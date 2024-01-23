import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function UserHeader({ display }) {
    return display === 'true' ? (
        <header className={cx('user-header')}>
            <Image
                src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/387759977_1702124953620599_5780326937799370357_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oN7NME9suoUAX_amOis&_nc_ht=scontent.fhan5-3.fna&oh=00_AfDkTbIS3G3nl3y5HDeBAQrQ9QhezoHvCrrIo87L8aziKw&oe=6569DD7D"
                className={cx('user-channel')}
                alt="Dao Duc Manh"
            />
            <div className={cx('user-detail')}>
                <p>Username</p>
                <p>@usernickname</p>
                <button className={cx('user-link')} href="#">
                    View your channel
                </button>
            </div>
        </header>
    ) : (
        <></>
    );
}

export default UserHeader;
