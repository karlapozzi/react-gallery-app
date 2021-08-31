import React from 'react';

//A 404-like component to load if a page/URL doesn't exists
const NoPage = props => (
  <div>
    <h3>Page Not Found</h3>
    <p>Oops! The page you're looking for doesn't exist. Please double check the URL you entered.</p>
  </div>
);

export default NoPage;