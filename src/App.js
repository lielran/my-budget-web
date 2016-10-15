import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SocialIcon } from 'react-social-icons';
const LINKEDIN_URL = "https://www.linkedin.com/in/lielran";
const EMAIL = "liel.ran.mail@gmail.com";
const GITHUB_URL = "https://github.com/lielran"
const TWITTER_URL = "https://twitter.com/lielran"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-footer">
        <SocialIcon  url={LINKEDIN_URL}/>
        <SocialIcon  url={EMAIL} network="email" />
        <SocialIcon  url={GITHUB_URL}/>
        <SocialIcon  url={TWITTER_URL}/>



        <h5>Copyright © MyBudget.io 2016</h5>
        </div>

      </div>

    );
  }
}

export default App;
