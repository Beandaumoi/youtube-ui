import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import UserHeader from './UserHeader';

const cx = classNames.bind(styles);

function Menu({ display, placement, children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <ProperWrapper className={cx('menu-popper')}>
                {history.length > 1 ? <UserHeader display={''} /> : <UserHeader display={display} />}
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </ProperWrapper>
        </div>
    );
    //Reset to first page
    const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            animation={false}
            trigger="click"
            placement={placement}
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    display: PropTypes.node,
    placement: PropTypes.node,
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu;
