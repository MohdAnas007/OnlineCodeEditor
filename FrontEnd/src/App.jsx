
import './chatgptcss.css';
import { useState } from 'react';
import { SendCodeToServer } from './Components/SendCodetoServer';
import { HandleRun } from './Components/HandleRunButton';
import { EditorComponent } from './Components/Editor';
import LanguageSelector from './Components/LanguageSelector';
import Download from './Components/Download';

function App() {

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [codeOutput, setCodeOutput] = useState('');
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState('python');


  return (
    <div>
      <div className="header">
        <div className="header-left">
          <h1 className="title">Code Compiler</h1>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
        <div className="header-center">
          <button
            className={`run${isLoading ? ' run--loading' : ''}`}
            onClick={() => {
              if (!isLoading) HandleRun(code, SendCodeToServer, setCodeOutput, input, language, setIsLoading);
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="run-spinner" />
                Running...
              </>
            ) : (
              <>
                <svg className="run-icon" viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Run
              </>
            )}
          </button>
          <button
            className="download-btn"
            onClick={() => Download(code, language)}
            title="Download code"
          >
            <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </button>
        </div>
        <div className="header-right" />
      </div>
      <div className="main">
        <div className="left">
          <EditorComponent code={code} setCode={setCode} language={language} />
        </div>
        <div className="right">
          <div className="input-container">
            <div className="input-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              Stdin
            </div>
            <textarea className='input' placeholder='Enter your input here...' onChange={(e) => setInput(e.target.value)}></textarea>
          </div>
          <div className="output-container">
            <div className="output-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <polyline points="8 10 12 14 8 18" />
                <line x1="14" y1="18" x2="18" y2="18" />
              </svg>
              Output
            </div>
            <div className="output">{codeOutput}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App