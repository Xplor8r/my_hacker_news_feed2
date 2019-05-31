import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { fetchPostData } from './actions/posts'
import TopStoriesContainer from './containers/topStoriesContainer';
import Post from './containers/postContainer';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchPostData();
  }
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">
            <div className="header__fixed">
              <a href="/"><h1>My Hacker News Feed</h1></a>
            </div>
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" component={TopStoriesContainer}/>
              <Route exact path="/post/:id" component={Post}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    postData: state.postData,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostData: () => dispatch(fetchPostData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
