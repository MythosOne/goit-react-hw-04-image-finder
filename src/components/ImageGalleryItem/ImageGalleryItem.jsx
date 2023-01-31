import { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem =({item})=> {
    const [shownModal, setshownModal] = useState(false);

    const onModal = () => {
        setshownModal(prevState => !prevState);
    };

    const { webformatURL } = item;

    return (
        <li className= {styles.ImageGalleryItem}>
            <img
                onClick={onModal}
                className={styles['ImageGalleryItem-image']}
                src={webformatURL}
                alt="img"
            />
            {shownModal && <Modal onClose={onModal} image={item} />}
        </li>
    );
};

ImageGalleryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
    }).isRequired,
};

export default ImageGalleryItem;
