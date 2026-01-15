import { Editor } from "@monaco-editor/react";

export const EditorComponent=({code,setCode})=>{

    return (
         <Editor
            className='code-area'
            defaultLanguage='cpp'
            value={code}
            onChange={(value) => setCode(value)}
            theme='vs-dark'
        />
    )
}

