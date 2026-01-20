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
        console.log("Program folder created");
        const time=Date.now()
        const cppFilePath=path.join(folderPath,'program.cpp');
        const inputFilePath=path.join(folderPath,'input.txt');
        const outputFilePath=path.join(folderPath,'program');
        fs.writeFileSync(cppFilePath,code);
        fs.writeFileSync(inputFilePath,input);
        console.log("File written succesfull");

         execSync(`g++ -std=c++20 "${cppFilePath}" -o "${outputFilePath}"`);
         console.log('Code compiled successfully\n');

         const output = execSync(`"${outputFilePath}" < "${inputFilePath}"`);
        // delete the program folder
        fs.rm(folderPath,{recursive:true,force:true},(err)=>{
            if(err){
                console.log(`some error in deleting program folder ${err}`);

            }
            else{
                console.log(`Time taken to compile and run the code is : ${(Date.now()-time)/1000} seconds`);
                console.log("Program folder deleted successfully");
            }
        })
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