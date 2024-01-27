import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { faKeyboard, faMagnifyingGlass, faMicrophone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import * as searchServices from '~/services/searchSercices';
import styles from './Search.module.scss';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);

    const debounce = useDebounce(searchValue, 400);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchServices.search(debounce);
            setSearchResult(result);
        };

        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <div className={cx('search-icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}

            <div>
                <HeadlessTippy
                    interactive
                    visible={showResults && searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                <h4 className={cx('search-title')}>Kênh</h4>

                                {searchResult && searchResult.length > 0 ? (
                                    searchResult.map((result) => <AccountItem key={result.id} data={result} />)
                                ) : (
                                    <p>No results found</p>
                                )}
                            </ProperWrapper>
                        </div>
                    )}
                    onClickOutside={handleHideResults}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder="Tìm kiếm"
                            spellCheck={false}
                            onChange={(e) => {
                                e.target.value = e.target.value.trimStart();
                                setSearchValue(e.target.value);
                            }}
                            onFocus={() => setShowResults(true)}
                        />
                        <button className={cx('keyboard')}>
                            <FontAwesomeIcon icon={faKeyboard} />
                        </button>
                        {!!searchValue && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        )}
                    </div>
                </HeadlessTippy>
            </div>
            <div>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button className={cx('micro-btn')}>
                    <FontAwesomeIcon icon={faMicrophone} />
                </button>
            </div>
        </div>
    );
}

export default Search;
