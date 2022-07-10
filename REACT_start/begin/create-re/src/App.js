import React,{Component} from 'react';
import './App.css';
import Subject from './con/component/Subject';
import TOC from './con/component/TOC';
import Control from './con/component/Control';
import ReadContent from './con/component/ReadContent';
import CreateContent from './con/component/CreateContent';
import { __esModule } from '@testing-library/user-event';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      mode:'welcome',
      selected_content_id:2,
      subject:{ title : 'WEB', sub:"World wide Web!" }  ,
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}   
      ]
    }
  }
  render(){
    let _title, _desc,_article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title ={_title} desc = {_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
      let i =0;
      while(i < this.state.contents.length){
        let data = this.state.contents[i]
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title ={_title} desc = {_desc}></ReadContent>
    }else if(this.state.mode === 'create'){
       _article = <CreateContent></CreateContent>
    }
    

    return( 
      <div className='App'>
         <Subject 
         title ={this.state.subject.title} 
         sub = {this.state.subject.sub}
         onChangePage = {function(){
           this.setState({mode:'welcome'})
         }.bind(this)}
         ></Subject>

         <TOC 
          onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
         }.bind(this)} 
         data = {this.state.contents}
         ></TOC>
         <Control onChangeMode = {function(_mode){ 
           this.setState({
             mode:_mode
           })
         }.bind(this)}></Control>
         {_article}
      </div>
    );
  }
}

export default App;