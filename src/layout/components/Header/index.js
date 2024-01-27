//Để có thể có đặt class có "-"
import classNames from 'classnames/bind';
import {
    faArrowRightFromBracket,
    faBars,
    faCircleInfo,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faGlobe,
    faKeyboard,
    faMoon,
    faPersonBooth,
    faShieldHalved,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Menu from '~/components/Proper/Menu';
import { faBitcoin, faGoogle, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { NotificationsIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUserShield} />,
        title: 'Your data in Youtube',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Appearance: Light',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language: English',
        children: {
            title: 'Choose your language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faShieldHalved} />,
        title: 'Restricted Mode: Disabled',
    },
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'Location: VietNam',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        line: true,
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Help',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'Send feedback',
    },
];

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faGoogle} />,
            title: 'Google Account',
            lineTop: true,
        },
        {
            icon: <FontAwesomeIcon icon={faPersonBooth} />,
            title: 'Switch account',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Sign out',
        },
        {
            icon: <FontAwesomeIcon icon={faSquareYoutube} />,
            title: 'Youtube Studio',
            lineTop: true,
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Purchases and memberships',
            lineBottom: true,
        },
        ...MENU_ITEMS,
    ];
    //Thẻ cha thì nên đặt là wrapper
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')} style={{ display: 'flex' }}>
                    <button className={cx('menu-btn')}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img
                            style={{ height: '20px', marginTop: '6px', cursor: 'pointer' }}
                            src={images.logo}
                            alt="YouTube"
                        />
                    </Link>
                </div>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 0]} content="Create" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 0]} content="Notifications" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <NotificationsIcon />
                                    <div className={cx('number-notifications')}>9+</div>
                                </button>
                            </Tippy>

                            <Menu display={'true'} placement={'left-end'} items={currentUser ? userMenu : MENU_ITEMS}>
                                <Image
                                    src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/387759977_1702124953620599_5780326937799370357_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oN7NME9suoUAX_amOis&_nc_ht=scontent.fhan5-3.fna&oh=00_AfDkTbIS3G3nl3y5HDeBAQrQ9QhezoHvCrrIo87L8aziKw&oe=6569DD7D"
                                    className={cx('user-avatar')}
                                    alt="Dao Duc Manh"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu placement={'bottom-end'} items={currentUser ? userMenu : MENU_ITEMS}>
                                <button className={cx('option-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>

                            <Button primary leftIcon={<FontAwesomeIcon icon={faUserCircle} />}>
                                Sign in
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
