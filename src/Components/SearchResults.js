import React from 'react';
import PhotoContainer from './PhotoContainer';

const SearchResults = ({search, data, match, existingTopic, toggleLoading}) => {
  let URLTopic = match.params.topic;
  
  if(existingTopic !== URLTopic) {
    toggleLoading();
    search(URLTopic);
  }

  return (
    <PhotoContainer data={data} topic={URLTopic}/>
  )
}

export default SearchResults;