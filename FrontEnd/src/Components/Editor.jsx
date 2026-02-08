import { Editor } from "@monaco-editor/react";

export const EditorComponent=({code,setCode,language})=>{
    return (
         <Editor
            className='code-area'
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
            theme='vs-dark'
        />
    )
}

