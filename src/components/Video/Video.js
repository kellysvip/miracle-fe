import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useRef, useState } from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const css = classNames.bind(styles);
function Video({ src, data }) {
    const inputRef = useRef();
    const [input, setInput] = useState('');
    return (
        <div className={css('wrapper')}>
            <div className={css('container')}>
                <div className={css('row')}>
                    <Image src={data.avatar} className={css('user-avatar')} alt={data.full_name} />
                    <Link to={`/@${data.full_name}`}>
                        <h4 className={css('user-name')}>{data.full_name}</h4>
                    </Link>
                    <FontAwesomeIcon className={css('user-tick')} icon={faCheckCircle} />
                </div>
                <video className={css('video')} src={src} controls></video>
            </div>
            <div className={css('comment')}>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    placeholder={`Chat something to ${data.full_name}`}
                    spellCheck={false}
                />
                <button
                    className={css('send-btn')}
                    onClick={() => {
                        setInput('');
                        if (inputRef.current.value !== '' && inputRef.current.value !== ' ') console.log('chat: ', input);
                        inputRef.current.focus();
                    }}
                >
                    <span>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                </button>
            </div>
        </div>
    );
}
Video.propTypes = {
    src: PropTypes.string,
    data: PropTypes.object,
};
export default Video;
