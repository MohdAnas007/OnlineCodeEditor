
import './chatgptcss.css';
import { useState } from 'react';
import { SendCodeToServer } from './Components/SendCodetoServer';
import { HandleRun } from './Components/HandleRunButton';
import { EditorComponent } from './Components/Editor';
import LanguageSelector from './Components/LanguageSelector';

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
        </div>
        <div className="header-right" />
      </div>
      <div className="main">
        <div className="left">
          <EditorComponent code={code} setCode={setCode} language={language} />
        </div>
        <div className="right">
          <textarea className='input' placeholder='input block' onChange={(e) => setInput(e.target.value)}></textarea>
          <div className="output">{codeOutput}</div>
        </div>
      </div>
    </div>
  )
}

export default App