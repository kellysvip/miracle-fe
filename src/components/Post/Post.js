import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import PropTypes from 'prop-types';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faHeart,
    faXmarkCircle,
    faComment as CommentSolid,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as RegularHeart, faComment } from '@fortawesome/fontawesome-free-regular';
import { useRef, useState } from 'react';
import Modal from '../Modal';
const css = classNames.bind(styles);
function Post({ data }) {
    const heartRegular = useRef();
    const heartSolid = useRef();
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleReact = () => {
        heartRegular.current.classList.toggle(css('active'));
        heartSolid.current.classList.toggle(css('active'));
    };
    return (
        <>
            <div className={css('wrapper')}>
                <Image className={css('post-image')} src={data.post_image} alt={data.full_name} />
                <div className={css('row')}>
                    <div className={css('col')}>
                        <Image className={css('user-avatar')} src={data.avatar} alt={data.full_name} />
                        <Link to={`./@${data.full_name}`}>
                            <h4 className={css('user-name')}>{data.full_name}</h4>
                        </Link>
                        <FontAwesomeIcon className={css('user-tick')} icon={faCheckCircle} />
                    </div>
                    <div className={css('react-box')}>
                        <span className={css('heart-icon')} ref={heartSolid} onClick={handleReact}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className={css('heart-icon', 'active')} ref={heartRegular} onClick={handleReact}>
                            <FontAwesomeIcon icon={RegularHeart} />
                        </span>
                        <span className={css('number-heart')}>{data.number_heart}</span>
                        <span
                            className={css('comment-icon')}
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className={css('number-comment')}>{data.number_comment}</span>
                    </div>
                </div>
                <p className={css('paragraph')}>{data.paragraph}</p>
            </div>
            {showModal && (
                <Modal>
                    <div className={css('wrapper', 'modal')}>
                        <span
                            className={css('quit-icon')}
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </span>
                        <Image className={css('post-image')} src={data.post_image} alt={data.full_name} />
                        <div className={css('row')}>
                            <div className={css('col')}>
                                <Image className={css('user-avatar')} src={data.avatar} alt={data.full_name} />
                                <h4 className={css('user-name')}>{data.full_name}</h4>
                                <FontAwesomeIcon className={css('user-tick')} icon={faCheckCircle} />
                            </div>
                            <div className={css('react-box')}>
                                <span className={css('heart-icon')} ref={heartSolid} onClick={handleReact}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <span className={css('heart-icon', 'active')} ref={heartRegular} onClick={handleReact}>
                                    <FontAwesomeIcon icon={RegularHeart} />
                                </span>
                                <span className={css('number-heart')}>{data.number_heart}</span>
                                <span className={css('comment-icon')}>
                                    <FontAwesomeIcon icon={CommentSolid} />
                                </span>
                                <span className={css('number-comment')}>{data.number_comment}</span>
                            </div>
                        </div>
                        <p className={css('paragraph')}>{data.paragraph}</p>
                        <div className={css('comment')}>
                            <input
                                ref={inputRef}
                                placeholder={`Chat something to ${data.full_name}`}
                                spellCheck={false}
                                type={'text'}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                }}
                                value={inputValue}
                            />
                            <button
                                onClick={() => {
                                    if (inputRef.current.value !== '' && inputRef.current.value !== ' ')
                                        console.log(inputValue);
                                    setInputValue('');
                                    inputRef.current.focus();
                                }}
                            >
                                <span>
                                    Send
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </span>
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
Post.propTypes = {
    data: PropTypes.object,
};
export default Post;
