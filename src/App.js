import './App.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import templateText from './template.js';


function Editor(props) {
  return (
      <textarea value={props.text} onChange={props.onChange}/>
  )
}

function Preview(props) {
  const dirtyHtml = marked.parse(props.text);

  return (
    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dirtyHtml)}}/>
  )
}


function App() {
  const [text, setText] = useState(templateText)

  return (
    <div>
      <Editor text={text} onChange={event => setText(event.target.value)}/>
      <Preview text={text}/>
    </div>
  );
}

export default App;
