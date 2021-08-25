import React from 'react';

const Image = props => (
  <li className="photo-container">
    <img src={props.url} alt={props.description} />
  </li>
);

export default Image;