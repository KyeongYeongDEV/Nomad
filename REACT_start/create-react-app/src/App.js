import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from './components/Subject';
import './App.css';

class App extends Component{
  render(){
    return (
        <div className = "App">
          <Subject 
            title = "WED"
            sub ="World wide Web!">
          </Subject>
          <Subject 
            title = "React" 
            sub = "For UI">
          </Subject>
          <TOC></TOC>
          <Content title = "HTML" desc= "HTML us HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;