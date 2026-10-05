import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => (
  <li className="ImageGalleryItem" onClick={() => onImageClick(largeImageURL)}>
    <img src={webformatURL} alt="Gallery item" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;