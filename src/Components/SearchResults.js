import React from 'react';
import PhotoContainer from './PhotoContainer';

const SearchResults = ({performSearch, data, match, existingTopic, toggleLoading}) => {
  let URLTopic = match.params.topic;
  
  if(existingTopic !== URLTopic) {
    toggleLoading();
    performSearch(URLTopic);
  }

  return (
    <PhotoContainer data={data} topic={URLTopic}/>
  )
}

export default SearchResults;