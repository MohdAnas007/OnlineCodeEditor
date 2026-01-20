
import './chatgptcss.css';
import { useState } from 'react';
import { SendCodeToServer } from './Components/SendCodetoServer';
import { HandleRun } from './Components/HandleRunButton';
import { EditorComponent } from './Components/Editor';
function App() {

  const [code, setCode] = useState("");
  const [codeOutput, setCodeOutput] = useState('');
  const [input,setInput]=useState("");


  return (
    <div>
      <div className="header">
        <h1 className="title">Code Compiler</h1>
        <button className='run'
          onClick={() => HandleRun(code, SendCodeToServer, setCodeOutput,input)}
        >RUN</button>
      </div>
      <div className="main">
        <div className="left">
          <EditorComponent code={code} setCode={setCode} />
        </div>
        <div className="right">
          <textarea className='input' placeholder='input block' onChange={(e)=>setInput(e.target.value)}></textarea>
          <div className="output">{codeOutput}</div>
        </div>
      </div>
    </div>
  )
}

export default App
