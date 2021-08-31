import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {

    const results = props.data;
    let images;
    if (results.length > 0) {
      images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} key={image.id} description={image.title} />)
    } else {
      images = <NotFound />
    }

    return (
    <div className="photo-container">
      <h2>{props.topic} images</h2>
      <ul>
      {images}
      </ul>
    </div>
    );
  }

  export default PhotoContainer;