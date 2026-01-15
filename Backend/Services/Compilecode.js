const {execSync}=require('child_process');
const fs=require('fs');
    
    const CompileCode=(code)=>{

    fs.writeFileSync('program.cpp',code);
    console.log('file written successfully\n');
    try{
        execSync('g++ -std=c++20 program.cpp -o program',{stdio:'inherit'});
        console.log('code compiled successfully\n');
        const output=execSync('./program');
        return output.toString();
    }
    catch(err){
       console.error('Compilation/Execution failed:', err.message); return `Error: ${err.message}`;
    }
    
}

module.exports={CompileCode}