import './App.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import templateText from './template.js';


function Editor(props) {
  return (
    <div className="Card">
      <textarea id="editor" value={props.text} onChange={props.onChange}/>
    </div>
  )
}

function Preview(props) {
  const dirtyHtml = marked.parse(props.text, { breaks: true });

  return (
    <div className="Card" id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dirtyHtml)}}/>
  )
}

function App() {
  const [text, setText] = useState(templateText)

  return (
    <div className="App-content">
      <div className="App-header">
        <h1>&larr; Preview</h1><h1>Editor &rarr;</h1>
      </div>
      <div className="App-cards">
        <Preview text={text}/>
        <Editor text={text} onChange={event => setText(event.target.value)}/>
      </div>
    </div>
  );
}

export default App;
