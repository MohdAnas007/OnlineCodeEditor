
import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
    return (
        <div className="lang-select-wrapper">
            <svg className="lang-select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <polyline points="4 7 12 15 20 7" />
            </svg>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="language-selector"
            >
                <option value="cpp">C++</option>
                <option value="c">C</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
