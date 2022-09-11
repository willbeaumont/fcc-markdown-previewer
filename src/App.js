import { marked } from 'marked';
import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import templateText from './template.js';

function Card({content: Content}) {
  return (
    <div className="p-6 w-1/2 mx-auto bg-slate-200 rounded-xl shadow-lg items-center">
      <Content />
    </div>
  )
}

function App() {
  const [text, setText] = useState(templateText)

  const Editor = () => {
    return <textarea className="form-textarea w-full h-full " id="editor" value={text} onChange={event => setText(event.target.value)}/>;
  };

  const Preview = () => {
    const dirtyHtml = marked.parse(text, { breaks: true });
    return <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dirtyHtml)}}/>;
  };

  return (
    <div className="bg-slate-400">
      <div className="h-screen">
        <div className="flex items-center">
          <h1>&larr; Preview</h1><h1>Editor &rarr;</h1>
        </div>
        <div className="flex flex-row p-6 space-x-4">
          <Card content={Preview} />
          <Card content={Editor} />
        </div>
      </div>
    </div>
  );
}

export default App;
