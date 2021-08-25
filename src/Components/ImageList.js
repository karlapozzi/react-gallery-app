import React from 'react';
import Image from './Image';
import NoResults from './NoResults';

const ImageList = props => {
  
  const results = props.data;
  let images;

  if (results.length > 0) {
    images = results.map(image => <Image url={image.url} key={image.id}/>)
  } else {
    images = <NoResults />
  }

  return (
    <ul classname="photo-container">
      {images}
    </ul>
  );
}

export default ImageList;