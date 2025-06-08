import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
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
    <div className="app-container">
      <PanelGroup direction="vertical">
        <Panel defaultSize={50} minSize={20} maxSize={75}>
          {/* The .pane div should fill this Panel */}
          <div className="pane top-pane"> 
            <PanelGroup direction="horizontal">
              <Panel defaultSize={30} minSize={20}>
                <Editor 
                  language="html" 
                  displayName="HTML" 
                  value={html} 
                  onChange={setHtml}
                />
              </Panel>
              <PanelResizeHandle className="resize-handle-vertical" />
              <Panel defaultSize={40} minSize={30}> {/* Explicitly set defaultSize */}
                <Editor 
                  language="css" 
                  displayName="CSS" 
                  value={css} 
                  onChange={setCss}
                />
              </Panel>
              <PanelResizeHandle className="resize-handle-vertical" />
              <Panel defaultSize={30} minSize={20}>
                <Editor 
                  language="javascript" 
                  displayName="JS" 
                  value={js} 
                  onChange={setJs}
                />
              </Panel>
            </PanelGroup>
          </div>
        </Panel>
        <PanelResizeHandle className="resize-handle-horizontal" />
        <Panel defaultSize={50} minSize={20} maxSize={75}>
          {/* The .pane div fills this Panel */}
          <div className="pane bottom-pane borderless-frame"> 
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
            />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default App
