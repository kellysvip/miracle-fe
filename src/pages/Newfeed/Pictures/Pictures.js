import classNames from 'classnames/bind';
import styles from './Pictures.module.scss';
import { PhotoAlbum } from 'react-photo-album';
import { images } from '../../../assets/imgs';
import { useState } from 'react';
import Image from '../../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../components/Modal';
import DrogAndDrag from '../../../components/DrogAndDrag';
const css = classNames.bind(styles);
function NewPictures() {
    const [showModal, setShowModal] = useState(false);
    const [img, setImg] = useState({});
    const handleClose = () => setShowModal(false);
    return (
        <div className={css('wrapper')}>
            <h2 className={css('label')}>Upload Your Image</h2>
            <DrogAndDrag className={css('drop-image')}/>
            <h2 className={css('label')}>Your Albums</h2>
            <PhotoAlbum
                layout="rows"
                onClick={(e) => {
                    setShowModal(true);
                    setImg(e.photo);
                }}
                spacing={20}
                padding={10}
                photos={images.albums}
                renderPhoto={(photo) => {
                    <Image className={css('image')} src={photo.src} style={{ ...photo.style }} />;
                }}
            />
            {showModal && (
                <Modal>
                    <Image
                        src={img.src}
                        alt=""
                        style={img.style}
                        className={css('modal-image', 'no-opacity')}
                        width={img.width}
                        height={img.height}
                    />
                    <button className={css('close-btn')} onClick={handleClose}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                </Modal>
            )}
        </div>
    );
}

export default NewPictures;
