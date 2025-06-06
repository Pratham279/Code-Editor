import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import './App.css'

function App() {
  const [html, setHtml] = useState('<!-- Write your HTML here -->');
  const [css, setCss] = useState('/* Write your CSS here */');
  const [js, setJs] = useState('// Write your JavaScript here');
  const [srcDoc, setSrcDoc] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250);
    
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="html" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml}
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss}
        />
        <Editor 
          language="javascript" 
          displayName="JS" 
          value={js} 
          onChange={setJs}
        />
      </div>
      <div className="pane bottom-pane borderless-frame">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App
