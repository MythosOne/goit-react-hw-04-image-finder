import React from 'react';
import {TailSpin} from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {

    return (
        <div className={styles.Loader}>
            <TailSpin color="#3d6fcce2" radius="9" height={100} width={100} />
        </div>
    );
};

export default Loader;