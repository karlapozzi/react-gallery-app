import React from 'react';
import PhotoContainer from './PhotoContainer';

const SearchResults = ({performSearch, data, match, existingTopic}) => {
  let URLTopic = match.params.topic;
  
  // If the existing topic (and therefore the photos state) doesn't match the URL topic,
  // perform search based on the URL topic (this helps with browser back button history)
  if(existingTopic !== URLTopic) {
    performSearch(URLTopic);
  }

  return (
    <PhotoContainer data={data} topic={URLTopic}/>
  )
}

export default SearchResults;