import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './config.js';

//App components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&per_page=50&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.data, 
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&per_page=50&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
        console.log(this.state.photos)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchForm onSearch={this.performSearch} />
          <Nav performSearch={this.performSearch} />
        </div>
        <div>
          <PhotoContainer data={this.state.photos} />
        </div>
      </div>
    );
  }
}
