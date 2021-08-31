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
import SearchResults from './Components/SearchResults';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      snakes: [],
      loading: true, 
      topic: 'Cat'
    };
  }

  componentDidMount() {
    this.getData('cats');
    this.getData('dogs');
    this.getData('snakes');
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          topic: query,
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  getData = (category) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${category}&per_page=24&api_key=${apiKey}&format=json&nojsoncallback=1`)
      .then(response => {
        if (category === 'cats') {
          this.setState({
            cats: response.data.photos.photo
          });
        }
        if (category === 'dogs') {
          this.setState({
            dogs: response.data.photos.photo
          });
        }
        if (category === 'snakes') {
          this.setState({
            snakes: response.data.photos.photo
          });
        }
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
                <Route exact path="/" render={ () => <Redirect to ="/cats" />} /> 
                <Route exact path={`/search/:topic`} render={ ({match}) => <SearchResults search={this.performSearch} data={this.state.photos} match={match} existingTopic={this.state.topic}/>} />
                <Route path="/cats" render={ () => <PhotoContainer data={this.state.cats} topic="Cat" />} />
                <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogs} topic="Dog" />}/>
                <Route path="/snakes" render={ () => <PhotoContainer data={this.state.snakes} topic="Snake" />} />
                <Route component={NoPage} />
              </Switch>
            }

        </div>
      </BrowserRouter>
    );
  }
}
