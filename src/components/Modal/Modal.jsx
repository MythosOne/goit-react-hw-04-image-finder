import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const ModalRoot = document.querySelector('#ModalRoot');

const Modal = ({ onClose, image }) => {

    useEffect(() => {
        const keyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            };
        };
        window.addEventListener('keydown', keyDown);
        
        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    }, [onClose]);

    const onOverlayClose = e => {
        if (e.currentTarget === e.target) {
            onClose();
        };
    };

    const { largeImageURL } = image;
    
        return createPortal(
            <div onClick={onOverlayClose} className={styles.Overlay}>
                <div className={styles.Modal}>
                    <img src={largeImageURL} alt="img" />
                </div>
            </div>,
            ModalRoot
        );
};

    Modal.propTypes = {
        image: PropTypes.object,
        onClose: PropTypes.func,
}.isRequired;

export default Modal;