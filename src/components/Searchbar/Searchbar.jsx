
import styles from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

const Searchbar = ({onSubmit}) => {
    const [inputData, setinputData] = useState('');

    const onChangeInput = e => {
        setinputData(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        onSubmit(inputData);
        setinputData('');
    };

        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={styles['SearchForm-button']}>
                        <ImSearch size={25} />
                    </button>

                    <input
                        className={styles['SearchForm-input']}
                        name="inputData"
                        value={inputData}
                        onChange={onChangeInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
};

export default Searchbar;
Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
};
