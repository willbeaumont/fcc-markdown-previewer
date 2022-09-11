import { marked } from 'marked';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import templateText from './template.js';

const cardCss = "p-6 w-full h-full overflow-auto mx-auto bg-slate-200 rounded-xl shadow-lg items-center";

function Editor(props) {
  return (
    <div className={cardCss}>
      <textarea className="form-textarea w-full h-full" id="editor" value={props.text} onChange={props.onChange}/>
    </div>
  )
}

function Preview(props) {
  const dirtyHtml = marked.parse(props.text, { breaks: true });

  return (
    <div className= {cardCss}>
      <div className="Card" id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dirtyHtml)}}/>
    </div>
  )
}

function App() {
  const [text, setText] = useState(templateText)
  const colCss = "flex flex-col items-center h-1/2 lg:w-1/2 lg:h-full"

  return (
    <div className="bg-slate-400">
      <div className="h-screen">
        <div className="flex flex-col lg:flex-row p-6 lg:space-x-4 h-full">
          <div className={colCss}>
            <h1>Editor</h1>
            <Editor text={text} onChange={event => setText(event.target.value)}/>
          </div>
          <div className={colCss}>
            <h1>Preview</h1>
            <Preview text={text}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
