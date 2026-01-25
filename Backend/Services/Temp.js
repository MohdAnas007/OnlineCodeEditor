const {exec} =require('child_process');

function EnsureContainer(workdir){
    return new Promise((resolve,reject)=>{
        // check if container exists
        exec(`docker ps -a --filter "name=cpp_runner" --format "{{.Names}}"`,(err,stdout)=>{
            if(err){
                return reject(err);
                
            }
            if(stdout.trim()==='cpp_runner'){
                // check exists ,check if its running 

                exec(`docker ps --filter "name=cpp_runner" --format "{{.Names}}"`,(err2,stdout2)=>{
                    if(err2)return reject(err2);
                    if(stdout2.trim()==='cpp_runner'){
                        return resolve()// already running 
                    }
                    // start existing container 
                    exec(`docker start cpp_runner`,(err3)=>{
                        if(err2)return reject(err3);
                        resolve();
                    });


                })
            }
            else{
                // container does not exists create it 
             const cmd = `docker run -dit --name cpp_runner -m 256m --memory-swap=256m --cpus="1.0" \ -v ${workdir}:/app gcc:latest sh -c "sleep infinity"`;
             exec(cmd,(err4)=>{
                if(err4)return reject(err4);
                resolve();

             })
            }
        })
    })
};

module.exports={EnsureContainer};