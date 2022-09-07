import './App.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import templateText from './template.js';


function Editor(props) {
  return (
      <textarea id="editor" value={props.text} onChange={props.onChange}/>
  )
}

function Preview(props) {
  const dirtyHtml = marked.parse(props.text, { breaks: true });

  return (
    <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dirtyHtml)}}/>
  )
}

function App() {
  const [text, setText] = useState(templateText)

  return (
    <div className="App-header">
      <Editor text={text} onChange={event => setText(event.target.value)}/>
      <Preview text={text}/>
    </div>
  );
}

export default App;
