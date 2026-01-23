
import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-selector"
            style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: '1px solid #454545',
                marginLeft: '15px',
                backgroundColor: '#3c3c3c',
                color: '#cccccc',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                outline: 'none',
                cursor: 'pointer'
            }}
        >
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
        </select>
    );
};

export default LanguageSelector;
