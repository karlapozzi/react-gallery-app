import React from 'react';
import PhotoContainer from './PhotoContainer';

const NavTopicContainer = (props) => (
  <PhotoContainer data={props.data} topic={props.topic} />
)

export default NavTopicContainer;