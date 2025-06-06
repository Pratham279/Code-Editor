import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { material } from "@uiw/codemirror-theme-material";
import { lineNumbers } from "@codemirror/view";
import { Maximize2, Minimize2 } from "lucide-react";

export default function Editor({ displayName, language, value, onChange }) {
  const [open, setOpen] = useState(true);
  
  function handleChange(value) {
    onChange(value);
  }
  
  function getLanguage() {
    switch(language) {
      case 'xml':
      case 'html':
        return html();
      case 'css':
        return css();
      case 'javascript':
      case 'js':
        return javascript({ jsx: true });
      default:
        return javascript();
    }
  }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button 
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          {open ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>      <CodeMirror
        value={value}
        onChange={handleChange}
        theme={material}
        extensions={[getLanguage(), lineNumbers()]}
        className="code-mirror-wrapper"
        height="100%"
      />
    </div>
  )
}
