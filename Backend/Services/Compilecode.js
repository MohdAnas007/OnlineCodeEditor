const {execSync}=require('child_process');
const fs=require('fs');
    
    const CompileCode=(code)=>{

    fs.writeFileSync('program.cpp',code);
    console.log('file written successfully\n');
    try{
        execSync('g++ -std=c++20 program.cpp -o program');
        console.log('code compiled successfully\n');
        const output=execSync('./program');

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