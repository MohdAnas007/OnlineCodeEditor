const {exec}=require('child_process');
const { timeLog } = require('console');
const path=require('path');
const RunDockerContainer=(codeFilePath,inputFilePath)=>{
    return new Promise((resolve,reject)=>{
        const absolutePathcode=path.resolve(codeFilePath);
        const absolutePathinput=path.resolve(inputFilePath);
        const cmd=`
         docker run --rm -m 256m --memory-swap=256m --cpus="1.0" \
            -v ${absolutePathcode}:/app/code.cpp \
            -v ${absolutePathinput}:/app/input.txt \
            gcc:latest sh -c "g++ /app/code.cpp -o /app/a.out && /app/a.out < /app/input.txt"
        
        `

         exec(cmd,{timeout:5000},(err,stdout,stderr)=>{
            // if(err){
            //     return reject(stderr || err.message);

            // }
            // resolve(stdout);
            if(err){
                if(err.killed){
                    return reject("Time Limit Exceeded");

                }
                if(stderr.includes("Killed")){
                    return reject("Memory Limit Exceeded");

                }
                return reject(stderr || err.message);
            }
            resolve(stdout);
         });
        

    })
}

module.exports={RunDockerContainer};