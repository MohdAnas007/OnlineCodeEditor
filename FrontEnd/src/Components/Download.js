import {saveAs} from "file-saver";
const config={
    python:'.py',
    java:'.java',
    cpp:'.cpp',
    javascript:'.js',
    c:'.c', 
    
};


const Download=(code,language)=>{
    const extension=config[language] || '.txt';
    
    const filename=`main.${extension}`;

    const blob=new Blob([code],{ type: 'text/plain;charset=utf-8' });
    saveAs(blob,filename);


}

export default Download;
