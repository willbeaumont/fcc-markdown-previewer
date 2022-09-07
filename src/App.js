import './App.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
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
        <Preview text={this.state.editorText}/>
      </div>
    )
  }
}

function Preview(props) {
  const dirtyHtml = marked.parse(props.text);

  return (
    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dirtyHtml)}}/>
  )
}


function App() {
  return (
    <Editor />
  );
}

export default App;
