import classNames from 'classnames/bind';
import styles from './DropAndDrag.module.scss';
import PropTypes from 'prop-types';
import { images } from '../../assets/imgs';
import Image from '../Image';
import { useState } from 'react';
const css = classNames.bind(styles);
function DropAndDrag({ className }) {
    const [files, setFiles] = useState(null);
    const dragOver = (e) => {
        e.preventDefault();
    };
    console.log(files)
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        setFiles(files[0]);
    };
    return (
        <div className={css('container', className)} onDragOver={dragOver} onDrop={fileDrop}>
            <div className={css('message')}>
                <Image className={css('upload-icon')} src={images.upload} alt="" />
                <p>Drag & Drop files here to upload</p>
                <span> Or</span>
                <br />
                <input
                    type="file"
                    onChange={(e) => {
                        setFiles(e.target.files[0]);
                    }}
                />
            </div>
        </div>
    );
}

DropAndDrag.propTypes = {
    classNames: PropTypes.string,
};
export default DropAndDrag;
