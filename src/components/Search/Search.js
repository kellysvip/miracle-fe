import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import AcountItem from '../AccountItem';
import useDebounce from '../../hooks/useDebounce';
const css = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const handeleSearchInput = (e) => {
        if (inputValue.startsWith(' ')){
            setInputValue('');
            return;
        } 
            
        setInputValue(e.target.value);
    };
    const handleClear = (e) => {
        setInputValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const debounceValue = useDebounce(inputValue, 800);
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResults([]);
            return;
        }
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [debounceValue]);
    return (
        <div>
            <HeadlessTippy
                visible={searchResults.length > 0 && showResults}
                interactive
                render={(attrs) => (
                    <div className={css('search-popper')}>
                        <h4 className={css('search-popper-title')}>Accounts</h4>
                        {searchResults.map((value, index) => {
                            return <AcountItem key={index} data={value} />;
                        })}
                    </div>
                )}
                onClickOutside={() => {
                    setShowResults(false);
                }}
            >
                <div className={css('wrapper')}>
                    <input
                        className={css('input')}
                        ref={inputRef}
                        placeholder="Search on Miracle"
                        value={inputValue}
                        onChange={handeleSearchInput}
                        onFocus={() => {
                            setShowResults(true);
                        }}
                    />
                    {!!inputValue && (
                        <button className={css('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                    )}
                    <Tippy content="Search">
                        <button className={css('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
