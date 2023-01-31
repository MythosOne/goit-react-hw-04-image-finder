import { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import apiService from './Api/apiService';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import styles from './App.module.css';

const App = () => {

  const [inputData, setinputData] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, settotalHits] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = (inputData) => {
    setinputData(inputData);
    setPage(1);
    setItems([]);
  };

  useEffect(() => {

    if (inputData.trim() === '') {
      return;
    }

    setisLoading(true);

    apiService(inputData, page)
      .then(images => {
        setItems(items =>
          [...items, ...images.hits]); 
        settotalHits(images.totalHits)}
        )
      .finally(() => setisLoading(false));
  }, [inputData, page]);

  const oneNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
  <>
    <div className={styles.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery items={items} />
      {isLoading && <Loader />}
      {totalHits > 12 && totalHits > items.length &&
        (<Button onClick={oneNextPage} />)}
    </div>
  </>
);
};

export default App;