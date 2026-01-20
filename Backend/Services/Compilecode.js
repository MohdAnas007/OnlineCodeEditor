const {execSync}=require('child_process');
const path=require('path');

const fs=require('fs');
    
    const CompileCode=(code,input)=>{

    // fs.writeFileSync('program.cpp',code);
    // fs.writeFileSync('input.txt',input);
    // console.log('file written successfully\n');
    try{
        // make a directory first
        
        const desiredLocationForPrgramFolder='Program';
        const folderPath=path.resolve(desiredLocationForPrgramFolder);
        fs.mkdirSync(folderPath,{recursive:true});
        const cppFilePath=path.join(folderPath,'program.cpp');
        const inputFilePath=path.join(folderPath,'input.txt');
        const outputFilePath=path.join(folderPath,'program');
        fs.writeFileSync(cppFilePath,code);
        fs.writeFileSync(inputFilePath,input);
        console.log("File written succesfull");

         execSync(`g++ -std=c++20 "${cppFilePath}" -o "${outputFilePath}"`);
         console.log('Code compiled successfully\n');

         const output = execSync(`"${outputFilePath}" < "${inputFilePath}"`);

        return output.toString();
    }
    catch(err){
        if(err.stderr){
            return err.stderr.toString()
        }
        else return err.message
    }
    
}

module.exports={CompileCode}