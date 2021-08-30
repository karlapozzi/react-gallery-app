import React from 'react';

const Photo = props => (
  <li>
    <img src={props.url} alt={props.description} />
  </li>
);

export default Photo;