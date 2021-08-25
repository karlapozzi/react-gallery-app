import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {
  
  const results = props.data;
  let images;

  if (results.length > 0) {
    images = results.map(image => <Photo url={image.url} key={image.id}/>)
  } else {
    images = <NotFound />
  }

  return (
    <ul className="photo-container">
      {images}
    </ul>
  );
}

export default PhotoContainer;