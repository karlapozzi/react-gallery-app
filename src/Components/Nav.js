import React from 'react';

const Nav = props => (
  <ul>
    <li className="main-nav">
      <a className="main-nav" href={props.performSearch('cats')}>Cats</a>
    </li>
    <li className="main-nav">
      <a className="main-nav" href={props.performSearch('dogs')}>Dogs</a>
    </li>
    <li className="main-nav">
      <a className="main-nav" href={props.performSearch('birds')}>Birds</a>
    </li>
  </ul>
);

export default Nav;

