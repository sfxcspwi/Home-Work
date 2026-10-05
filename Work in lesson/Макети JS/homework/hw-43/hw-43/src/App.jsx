import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/Imagegallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { fetchImages } from './services/api';
import './styles.css';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = (query, page) => {
    this.setState({ isLoading: true });

    fetchImages(query, page)
      .then(data => {
        const newImages = data.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }));

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchSubmit = newQuery => {
    if (newQuery === this.state.query) return;
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.openModal} />
        )}
        
        {isLoading && <Loader />}
        
        {images.length > 0 && !isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={this.handleLoadMore} />
          </div>
        )}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}