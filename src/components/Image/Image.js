import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import { images } from '../../assets/imgs';
const css = classNames.bind(styles);
const Image = forwardRef(({ className = '', src = '', alt = '', customDefaultSrc, ...props }, ref) => {
    const [defaultSrc, setDefaultSrc] = useState('');
    return (
        <img
            ref={ref}
            className={css('image', className)}
            src={src || defaultSrc}
            alt={alt}
            {...props}
            onError={() => {
                setDefaultSrc(images.noImage || customDefaultSrc);
            }}
        />
    );
});
Image.propTypes = {
    classNames: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    customDefaultSrc: PropTypes.string,
};
export default Image;
