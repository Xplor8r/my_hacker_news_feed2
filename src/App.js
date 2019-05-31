import React from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopStoriesContainer from './containers/topStoriesContainer'
import Post from './containers/postContainer'
import './App.css';

function App() {
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

export default App;
