import React, { Component } from 'react';
import './App.css';

//App components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
        </div>
        <div>
          <PhotoContainer />
        </div>
      </div>
    );
  }
}

export default App;
