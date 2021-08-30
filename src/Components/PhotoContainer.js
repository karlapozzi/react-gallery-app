import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

export default class PhotoContainer extends Component {

  generatePhotos = (props) => {
    const results = props.data;
    let images;
    if (results.length > 0) {
      images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`} key={image.id} description={image.title} />)
      } else {
        images = <NotFound />
      }
    return images;
  }

  render () {
    return (
    <div className="photo-container">
      <h2>{this.props.topic} images</h2>
      <ul>
      {this.generatePhotos(this.props)}
      </ul>
    </div>
    );
    }
  }