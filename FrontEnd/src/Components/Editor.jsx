import { Editor } from "@monaco-editor/react";

export const EditorComponent = ({ code, setCode, language }) => {
    return (
        <div className="editor-wrapper">
            <div className="editor-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                </svg>
                Code
            </div>
            <Editor
                className='code-area'
                language={language}
                value={code}
                onChange={(value) => setCode(value)}
                theme='vs-dark'
            />
        </div>
    )
}

