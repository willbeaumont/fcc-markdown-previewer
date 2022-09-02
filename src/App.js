import './App.css';
import { marked } from 'marked';
import React from 'react';
import templateText from './template.js';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: templateText
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.editorText}</div>
        <Rendered text={this.state.editorText}/>
      </div>
    )
  }
}

function Rendered(props) {
  const html = marked.parse(props.text);
  return (
    <div dangerouslySetInnerHTML={{__html: html}}/>
  )
}


function App() {
  return (
    <Editor />
  );
}

export default App;
