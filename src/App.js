import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

//App components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import apiKey from './config.js';
import NoPage from './Components/NoPage.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      snakes: [],
      loading: true, 
      topic: 'Recent'
    };
  }

  componentDidMount() {
    this.getRecent();
    this.getCatData();
    this.getDogData();
    this.getSnakeData();
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          topic: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getRecent = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  getCatData = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=cats&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getDogData = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=dogss&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogs: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getSnakeData = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=snakes&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          snakes: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
            <SearchForm onSearch={this.performSearch} />
            <Nav />
          
            {(this.state.loading) ? <p>Loading...</p> : 
              <Switch>
                <Route exact path="/" render={ () => <Redirect to="/search/recent" />} />
                <Route path={`/search/${this.state.topic}`} render={ () => <PhotoContainer data={this.state.photos} topic={this.state.topic} />} />
                <Route path="/cats" render={ () => <PhotoContainer data={this.state.cats} topic="Cat" />} />
                <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogs} topic="Dog" />} />
                <Route path="/snakes" render={ () => <PhotoContainer data={this.state.snakes} topic="Snake" />} />
                <Route component={NoPage} />
              </Switch>
            }

        </div>
      </BrowserRouter>
    );
  }
}
